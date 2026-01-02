"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import {
  submitQuoteRequest,
  type QuoteFormData,
} from "@/app/(client)/request-quote/actions";
import { toast } from "sonner";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const PACKAGES = [
  {
    id: "foundation",
    name: "Foundation",
    price: "NPR 40,000+",
    description: "Perfect for starting out",
  },
  {
    id: "momentum",
    name: "Momentum",
    price: "NPR 120,000+",
    description: "Accelerate your growth",
    popular: true,
  },
  {
    id: "peak",
    name: "Peak",
    price: "NPR 300,000+",
    description: "Transform your business",
  },
  {
    id: "custom",
    name: "Custom Package",
    price: "Let's discuss",
    description: "Tailored to your needs",
  },
];

const SERVICES = [
  "Custom Web Applications",
  "Mobile App Development",
  "Website Design & Development",
  "E-commerce Solutions",
  "UI/UX Design",
  "SaaS Development",
  "API Development",
  "Cloud Solutions",
  "Business Intelligence",
  "DevOps Services",
  "Photography & Videography",
  "Digital Marketing",
];

const BUDGETS = [
  "Under NPR 50,000",
  "NPR 50,000 - 100,000",
  "NPR 100,000 - 250,000",
  "NPR 250,000 - 500,000",
  "NPR 500,000+",
  "Not sure yet",
];

const TIMELINES = [
  "ASAP (Within 1 month)",
  "1-2 months",
  "2-3 months",
  "3-6 months",
  "6+ months",
  "Flexible",
];

export default function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Partial<QuoteFormData>>({
    name: "",
    email: "",
    phone: "",
    company: "",
    package: "",
    services: [],
    description: "",
    budget: "",
    timeline: "",
  });

  const totalSteps = 4;

  const updateFormData = (field: keyof QuoteFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (service: string) => {
    const currentServices = formData.services || [];
    if (currentServices.includes(service)) {
      updateFormData(
        "services",
        currentServices.filter((s) => s !== service)
      );
    } else {
      updateFormData("services", [...currentServices, service]);
    }
  };

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        if (!formData.name || !formData.email || !formData.phone) {
          toast.error("Please fill in all required fields");
          return false;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
          toast.error("Please enter a valid email address");
          return false;
        }
        return true;
      case 2:
        if (!formData.package) {
          toast.error("Please select a package");
          return false;
        }
        return true;
      case 3:
        if (!formData.services || formData.services.length === 0) {
          toast.error("Please select at least one service");
          return false;
        }
        return true;
      case 4:
        if (!formData.description || !formData.budget || !formData.timeline) {
          toast.error("Please fill in all project details");
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;

    setIsSubmitting(true);
    try {
      const result = await submitQuoteRequest(formData as QuoteFormData);
      if (result.success) {
        toast.success(result.message);
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          package: "",
          services: [],
          description: "",
          budget: "",
          timeline: "",
        });
        setCurrentStep(1);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center flex-1">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  step <= currentStep
                    ? "bg-[#dd4f43] border-[#dd4f43] text-white"
                    : "bg-white border-foreground/20 text-foreground/40"
                }`}
              >
                {step < currentStep ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span className="font-oswald font-bold">{step}</span>
                )}
              </div>
              {step < totalSteps && (
                <div
                  className={`flex-1 h-1 mx-2 ${
                    step < currentStep ? "bg-[#dd4f43]" : "bg-foreground/10"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs md:text-sm text-foreground/60">
          <span>About You</span>
          <span>Package</span>
          <span>Services</span>
          <span>Details</span>
        </div>
      </div>

      {/* Form Steps */}
      <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-foreground/10">
        {/* Step 1: Personal Info */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-oswald font-bold text-foreground mb-2">
                Tell us about yourself
              </h2>
              <p className="text-foreground/60">
                We'll use this information to contact you
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label className="block text-sm font-medium text-foreground mb-2">
                  Full Name <span className="text-[#dd4f43]">*</span>
                </Label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateFormData("name", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-foreground/20 focus:border-[#dd4f43] focus:ring-2 focus:ring-[#dd4f43]/20 outline-none transition-all"
                  placeholder="Enter Your Name"
                />
              </div>

              <div>
                <Label className="block text-sm font-medium text-foreground mb-2">
                  Email Address <span className="text-[#dd4f43]">*</span>
                </Label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-foreground/20 focus:border-[#dd4f43] focus:ring-2 focus:ring-[#dd4f43]/20 outline-none transition-all"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <Label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number <span className="text-[#dd4f43]">*</span>
                </Label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-foreground/20 focus:border-[#dd4f43] focus:ring-2 focus:ring-[#dd4f43]/20 outline-none transition-all"
                  placeholder="+977 98XXXXXXXX"
                />
              </div>

              <div>
                <Label className="block text-sm font-medium text-foreground mb-2">
                  Company Name (Optional)
                </Label>
                <Input
                  type="text"
                  value={formData.company}
                  onChange={(e) => updateFormData("company", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-foreground/20 focus:border-[#dd4f43] focus:ring-2 focus:ring-[#dd4f43]/20 outline-none transition-all"
                  placeholder="Your Company"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Package Selection */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-oswald font-bold text-foreground mb-2">
                Choose your package
              </h2>
              <p className="text-foreground/60">
                Select the package that best fits your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => updateFormData("package", pkg.name)}
                  className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all ${
                    formData.package === pkg.name
                      ? "border-[#dd4f43] bg-[#dd4f43]/5"
                      : "border-foreground/10 hover:border-[#dd4f43]/40"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 right-4 bg-[#dd4f43] text-white px-3 py-1 rounded-full text-xs font-oswald uppercase">
                      Popular
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-oswald font-bold text-foreground">
                      {pkg.name}
                    </h3>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        formData.package === pkg.name
                          ? "border-[#dd4f43] bg-[#dd4f43]"
                          : "border-foreground/20"
                      }`}
                    >
                      {formData.package === pkg.name && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-foreground/60 mb-2">
                    {pkg.description}
                  </p>
                  <p className="text-lg font-oswald font-semibold text-[#dd4f43]">
                    {pkg.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Services Selection */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-oswald font-bold text-foreground mb-2">
                What services do you need?
              </h2>
              <p className="text-foreground/60">
                Select all services that apply to your project
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {SERVICES.map((service) => (
                <div
                  key={service}
                  onClick={() => handleServiceToggle(service)}
                  className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    formData.services?.includes(service)
                      ? "border-[#dd4f43] bg-[#dd4f43]/5"
                      : "border-foreground/10 hover:border-[#dd4f43]/40"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                      formData.services?.includes(service)
                        ? "border-[#dd4f43] bg-[#dd4f43]"
                        : "border-foreground/20"
                    }`}
                  >
                    {formData.services?.includes(service) && (
                      <Check className="w-3 h-3 text-white" />
                    )}
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Project Details */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-oswald font-bold text-foreground mb-2">
                Tell us about your project
              </h2>
              <p className="text-foreground/60">
                Help us understand your requirements better
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label className="block text-sm font-medium text-foreground mb-2">
                  Project Description <span className="text-[#dd4f43]">*</span>
                </Label>
                <Textarea
                  value={formData.description}
                  onChange={(e) =>
                    updateFormData("description", e.target.value)
                  }
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-foreground/20 focus:border-[#dd4f43] focus:ring-2 focus:ring-[#dd4f43]/20 outline-none transition-all resize-none"
                  placeholder="Describe your project, goals, and any specific requirements..."
                />
              </div>

              <div>
                <Label className="block text-sm font-medium text-foreground mb-2">
                  Budget Range <span className="text-[#dd4f43]">*</span>
                </Label>
                <select
                  value={formData.budget}
                  onChange={(e) => updateFormData("budget", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-foreground/20 focus:border-[#dd4f43] focus:ring-2 focus:ring-[#dd4f43]/20 outline-none transition-all"
                >
                  <option value="">Select your budget range</option>
                  {BUDGETS.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Label className="block text-sm font-medium text-foreground mb-2">
                  Timeline <span className="text-[#dd4f43]">*</span>
                </Label>
                <select
                  value={formData.timeline}
                  onChange={(e) => updateFormData("timeline", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-foreground/20 focus:border-[#dd4f43] focus:ring-2 focus:ring-[#dd4f43]/20 outline-none transition-all"
                >
                  <option value="">When do you need this completed?</option>
                  {TIMELINES.map((timeline) => (
                    <option key={timeline} value={timeline}>
                      {timeline}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-foreground/10">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-oswald text-base uppercase transition-all ${
              currentStep === 1
                ? "opacity-0 pointer-events-none"
                : "border-2 border-foreground text-foreground hover:bg-foreground hover:text-white"
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>

          {currentStep < totalSteps ? (
            <button
              onClick={nextStep}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-oswald text-base uppercase bg-[#dd4f43] text-white hover:bg-[#c44539] transition-all"
            >
              Next
              <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-oswald text-base uppercase bg-[#dd4f43] text-white hover:bg-[#c44539] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
