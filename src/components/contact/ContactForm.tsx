"use client";
import React, { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import MultipleSelector, { type Option } from "@/components/ui/multiselect";
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

export default function ContactForm() {
  const serviceOptions: Option[] = useMemo(
    () => expertiseData.map((e) => ({ value: e.category, label: e.category })),
    []
  );

  const [services, setServices] = useState<Option[]>([]);

  return (
    <div className="w-full max-w-3xl mt-6 md:mt-10">
      <div className="rounded-2xl border border-foreground/20 bg-background p-6 sm:p-8 shadow-xs">
        <FieldSet className="w-full">
          <FieldLegend className="sr-only">Request a quote</FieldLegend>
          <FieldGroup className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field orientation="responsive">
                <FieldLabel>Full name</FieldLabel>
                <FieldContent>
                  <Input placeholder="Jane Doe" required aria-required="true" />
                </FieldContent>
              </Field>
              <Field orientation="responsive">
                <FieldLabel>Email</FieldLabel>
                <FieldContent>
                  <Input
                    type="email"
                    placeholder="jane@company.com"
                    required
                    aria-required="true"
                  />
                </FieldContent>
              </Field>
              <Field orientation="responsive">
                <FieldLabel>Company</FieldLabel>
                <FieldContent>
                  <Input placeholder="Acme Inc." />
                </FieldContent>
              </Field>
              <Field orientation="responsive" className="md:col-span-2">
                <FieldLabel>Services needed</FieldLabel>
                <FieldContent>
                  <MultipleSelector
                    value={services}
                    onChange={setServices}
                    defaultOptions={serviceOptions}
                    placeholder="Select one or more"
                    className="bg-transparent"
                  />
                </FieldContent>
              </Field>
              <Field orientation="responsive" className="md:col-span-2">
                <FieldLabel>Description</FieldLabel>
                <FieldContent>
                  <Textarea
                    placeholder="Tell us about your goals, scope, timeline, and any relevant links."
                    rows={6}
                  />
                  <FieldDescription>
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
                className="bg-foreground rounded-3xl p-4"
              >
                Submit request
              </Button>
            </div>
          </FieldGroup>
        </FieldSet>
      </div>
    </div>
  );
}
