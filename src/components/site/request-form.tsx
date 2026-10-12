import { useEffect, useState } from "react";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, SERVICE_OPTIONS, type ServiceOption } from "@/lib/site";

type Fields = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FieldName = keyof Fields;

const EMPTY: Fields = { name: "", email: "", phone: "", service: "", message: "" };

function validate(fields: Fields): Partial<Record<FieldName, string>> {
  const errors: Partial<Record<FieldName, string>> = {};
  if (fields.name.trim().length < 2) errors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (fields.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Enter a phone number with at least 10 digits.";
  }
  if (!fields.service) errors.service = "Choose a service.";
  if (fields.message.trim().length < 12) {
    errors.message = "Describe the problem in at least a short sentence.";
  }
  return errors;
}

export function RequestForm({ initialService = "" }: { initialService?: string }) {
  const [fields, setFields] = useState<Fields>({ ...EMPTY, service: initialService });
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    if (!initialService) return;
    setFields((current) => ({ ...current, service: initialService }));
  }, [initialService]);

  function update(name: FieldName, value: string) {
    setFields((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setPreview(false);
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate(fields);
    setErrors(next);
    setPreview(Object.keys(next).length === 0);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-xl bg-surface p-5 shadow-card sm:p-8">
      <p className="text-sm leading-relaxed text-ink-soft">
        This form demonstrates the request a finished site would collect. It does not email
        Emergency Sewers and it does not store your details. To reach the business, call{" "}
        <a className="font-medium text-accent underline-offset-2 hover:underline" href={`tel:${PHONE_TEL}`}>
          {PHONE_DISPLAY}
        </a>{" "}
        or email{" "}
        <a className="font-medium text-accent underline-offset-2 hover:underline" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
        .
      </p>

      {preview ? (
        <div className="mt-6 rounded-lg border border-line bg-paper p-5" role="status">
          <h3 className="font-display text-2xl text-ink">Demonstration only — nothing was sent</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            Your details stayed in this browser. Emergency Sewers was not notified, and no message
            was delivered. Call {PHONE_DISPLAY} or email {EMAIL} if you want to contact the
            business.
          </p>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="grid grid-cols-[7rem_1fr] gap-2">
              <dt className="text-muted">Name</dt>
              <dd>{fields.name}</dd>
            </div>
            <div className="grid grid-cols-[7rem_1fr] gap-2">
              <dt className="text-muted">Email</dt>
              <dd className="break-all">{fields.email}</dd>
            </div>
            <div className="grid grid-cols-[7rem_1fr] gap-2">
              <dt className="text-muted">Phone</dt>
              <dd>{fields.phone}</dd>
            </div>
            <div className="grid grid-cols-[7rem_1fr] gap-2">
              <dt className="text-muted">Service</dt>
              <dd>{fields.service}</dd>
            </div>
            <div className="grid grid-cols-[7rem_1fr] gap-2">
              <dt className="text-muted">Message</dt>
              <dd className="whitespace-pre-wrap">{fields.message}</dd>
            </div>
          </dl>
        </div>
      ) : null}

      <div className="mt-6 grid gap-5">
        <Field label="Name" name="name" error={errors.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={fields.name}
            onChange={(event) => update("name", event.target.value)}
            className={inputClass(Boolean(errors.name))}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </Field>
        <Field label="Email" name="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={fields.email}
            onChange={(event) => update("email", event.target.value)}
            className={inputClass(Boolean(errors.email))}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>
        <Field label="Phone" name="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={fields.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={inputClass(Boolean(errors.phone))}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
        </Field>
        <Field label="Service needed" name="service" error={errors.service}>
          <select
            id="service"
            name="service"
            value={fields.service}
            onChange={(event) => update("service", event.target.value)}
            className={inputClass(Boolean(errors.service))}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Message" name="message" error={errors.message}>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={fields.message}
            onChange={(event) => update("message", event.target.value)}
            className={inputClass(Boolean(errors.message)) + " min-h-32 resize-y py-3"}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : "message-hint"}
          />
          <p id="message-hint" className="text-sm text-muted">
            Which fixture, how long it has been happening, and whether one room or several are
            affected.
          </p>
        </Field>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-accent px-5 text-sm font-medium text-accent-fg transition-colors duration-150 hover:bg-accent-hover sm:w-auto"
      >
        Submit request
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: FieldName;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${name}-error`} className="text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function inputClass(invalid: boolean) {
  return (
    "min-h-11 w-full rounded-md border bg-paper px-3 text-base text-ink " +
    (invalid ? "border-danger" : "border-line")
  );
}

export function serviceFromSearch(value: string): ServiceOption | "" {
  return (SERVICE_OPTIONS as readonly string[]).includes(value) ? (value as ServiceOption) : "";
}
