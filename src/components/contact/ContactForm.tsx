"use client";
import React, { useMemo, useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import MultipleSelector, { type Option } from "@/components/ui/multiselect";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldLegend,
} from "@/components/ui/field";
import { expertiseData } from "@/lib/constants/expertise";
import {
  submitContactForm,
  type ContactFormData,
} from "@/app/(client)/contact-us/actions";

export default function ContactForm() {
  const serviceOptions: Option[] = useMemo(
    () => expertiseData.map((e) => ({ value: e.category, label: e.category })),
    []
  );

  const [services, setServices] = useState<Option[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "General Enquiry",
    description: "",
  });
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.enquiryType ||
      !formData.description
    ) {
      setMessage({
        type: "error",
        text: "Please fill in all required fields.",
      });
      return;
    }

    const contactData: ContactFormData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      enquiryType: formData.enquiryType,
      services:
        formData.enquiryType === "Service"
          ? services.map((s) => s.value)
          : undefined,
      description: formData.description,
    };

    startTransition(async () => {
      const result = await submitContactForm(contactData);
      setMessage({
        type: result.success ? "success" : "error",
        text: result.message,
      });

      if (result.success) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          enquiryType: "General Enquiry",
          description: "",
        });
        setServices([]);
      }
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full max-w-3xl">
      <div className="rounded-2xl border border-foreground/20 bg-background p-6 sm:p-8 shadow-xs">
        <form onSubmit={handleSubmit}>
          <FieldSet className="w-full">
            <FieldLegend className="sr-only">Request a quote</FieldLegend>
            <FieldGroup className="w-full">
              {message && (
                <div
                  className={`p-4 rounded-lg mb-6 ${
                    message.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {message.text}
                </div>
              )}
              <div className="space-y-6">
                <Field>
                  <FieldLabel className="text-xs md:text-base text-foreground leading-relaxed">
                    Full name
                  </FieldLabel>
                  <FieldContent>
                    <Input
                      placeholder="Jane Doe"
                      required
                      aria-required="true"
                      className="text-xs md:text-base text-foreground leading-relaxed"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                    />
                  </FieldContent>
                </Field>
                <Field>
                  <FieldLabel className="text-xs md:text-base text-foreground leading-relaxed">
                    Email
                  </FieldLabel>
                  <FieldContent>
                    <Input
                      type="email"
                      placeholder="jane@company.com"
                      required
                      aria-required="true"
                      className="text-xs md:text-base text-foreground leading-relaxed"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                    />
                  </FieldContent>
                </Field>
                <Field>
                  <FieldLabel className="text-xs md:text-base text-foreground leading-relaxed">
                    Phone
                  </FieldLabel>
                  <FieldContent>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="text-xs md:text-base text-foreground leading-relaxed"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      required
                      aria-required="true"
                    />
                  </FieldContent>
                </Field>
                <Field>
                  <FieldLabel className="text-xs md:text-base text-foreground leading-relaxed">
                    Enquiry Type
                  </FieldLabel>
                  <FieldContent>
                    <Select
                      value={formData.enquiryType}
                      onValueChange={(value) =>
                        handleInputChange("enquiryType", value)
                      }
                      required
                    >
                      <SelectTrigger className="text-xs md:text-base text-foreground leading-relaxed w-full">
                        <SelectValue placeholder="Select enquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="General Enquiry">
                          General Enquiry
                        </SelectItem>
                        <SelectItem value="Service">Service</SelectItem>
                        <SelectItem value="Feedback">Feedback</SelectItem>
                      </SelectContent>
                    </Select>
                  </FieldContent>
                </Field>
                {formData.enquiryType === "Service" && (
                  <Field>
                    <FieldLabel className="text-xs md:text-base text-foreground leading-relaxed">
                      Services needed
                    </FieldLabel>
                    <FieldContent>
                      <MultipleSelector
                        value={services}
                        onChange={setServices}
                        defaultOptions={serviceOptions}
                        placeholder="Select one or more"
                        className="bg-transparent text-xs md:text-base text-foreground leading-relaxed"
                      />
                    </FieldContent>
                  </Field>
                )}
                <Field>
                  <FieldLabel className="text-xs md:text-base text-foreground leading-relaxed">
                    Description
                  </FieldLabel>
                  <FieldContent>
                    <Textarea
                      placeholder="Tell us about your goals, scope, timeline, and any relevant links."
                      rows={6}
                      className="text-xs md:text-base text-foreground leading-relaxed"
                      value={formData.description}
                      onChange={(e) =>
                        handleInputChange("description", e.target.value)
                      }
                      required
                      aria-required="true"
                    />
                    <FieldDescription className="text-xs md:text-base text-foreground leading-relaxed">
                      Share as much context as you can.
                    </FieldDescription>
                  </FieldContent>
                </Field>
              </div>
              <div className="mt-6 flex justify-end">
                <Button
                  type="submit"
                  variant="default"
                  color="primary"
                  className="bg-foreground rounded-3xl p-6 text-xs md:text-base"
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit request"
                  )}
                </Button>
              </div>
            </FieldGroup>
          </FieldSet>
        </form>
      </div>
    </div>
  );
}
