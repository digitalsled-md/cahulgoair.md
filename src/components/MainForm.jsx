import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import viber from "../assets/icons/viber.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import phone from "../assets/icons/phone.svg";
import Button from "../components/Button";
import { X } from "lucide-react";

const initialFormData = {
  name: "",
  phone: "",
  seats: 1,
  direction: "bucharest",
  pickup_point: "cahul_center",
  arrival_type: "airport",
  arrival_datetime: "",
  ticket_photo: null,
  consent: false,
  additional: "",
};

const MainForm = ({ setIsMainFormOpen, isMainFormOpen }) => {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const directions = [
    {
      value: "bucharest",
      label: t.form.directions.bucharest,
    },
    {
      value: "iasi",
      label: t.form.directions.iasi,
    },
    {
      value: "chisinau",
      label: t.form.directions.chisinau,
    },
  ];

  const pickupOptions = [
    {
      value: "cahul_center",
      label: t.form.pickupPoints.cahul_center,
    },
    {
      value: "cahul_linella",
      label: t.form.pickupPoints.cahul_linella,
    },
    {
      value: "crihana",
      label: "Crihana",
    },
    {
      value: "pascani",
      label: "Pașcani",
    },
    {
      value: "manta",
      label: "Manta",
    },
    {
      value: "vadul_isac",
      label: "Vadul lui Isac",
    },
    {
      value: "colibasi",
      label: "Colibași",
    },
    {
      value: "brinza",
      label: "Brînza",
    },
    {
      value: "valeni",
      label: "Văleni",
    },
    {
      value: "slobozia_mare",
      label: "Slobozia Mare",
    },
    {
      value: "chiscalia_prut",
      label: "Chiscani-Prut",
    },
    {
      value: "giurgiulesti",
      label: "Giurgiulești",
    },
  ];

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.phone.trim()) {
      newErrors.phone = t.form.errors.phone;
    }

    if (formData.seats < 1 || formData.seats > 8) {
      newErrors.seats = t.form.errors.seats;
    }

    if (!formData.arrival_datetime) {
      newErrors.arrival_datetime = t.form.errors.datetime;
    }

    if (formData.arrival_type === "airport" && !formData.ticket_photo) {
      newErrors.ticket_photo = t.form.errors.ticket;
    }

    if (formData.ticket_photo && formData.ticket_photo.size > 5 * 1024 * 1024) {
      newErrors.ticket_photo = t.form.errors.fileSize;
    }

    if (!formData.consent) {
      newErrors.consent = t.form.errors.consent;
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const createRequestBody = () => {
    const payload = {
      name: formData.name,
      phone: formData.phone,
      seats: formData.seats,
      direction: formData.direction,
      pickup_point: formData.pickup_point,
      arrival_type: formData.arrival_type,
      arrival_datetime: new Date(formData.arrival_datetime).toISOString(),
      consent: formData.consent,
      notes: formData.additional,
    };

    if (formData.ticket_photo) {
      const data = new FormData();

      Object.entries(payload).forEach(([key, value]) => {
        data.append(key, String(value));
      });

      data.append("ticket_photo", formData.ticket_photo);

      return {
        body: data,
      };
    }

    return {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      const requestConfig = createRequestBody();

      const response = await fetch(
        "https://cahulgoair.onrender.com/api/bookings/",
        {
          method: "POST",
          ...requestConfig,
        },
      );

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        if (data && typeof data === "object") {
          setErrors(data);
        }

        throw new Error("Request failed");
      }

      alert(t.form.success);

      setFormData(initialFormData);
      setErrors({});
    } catch (error) {
      console.error(error);

      alert(t.form.failed);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`animate-fade-in fixed top-30 right-2 bottom-6 left-2 z-20 container mx-auto overflow-y-auto rounded-4xl bg-[#ECECEC] p-8 ${
        isMainFormOpen ? "block" : "hidden"
      }`}
    >
      <h2 className="mb-8 text-3xl font-bold text-[#355070] md:text-4xl">
        {t.form.title}
      </h2>

      <button
        className="absolute top-7 right-7 cursor-pointer"
        type="button"
        onClick={() => {
          setIsMainFormOpen(false);
        }}
      >
        <X width={30} height={30} />
      </button>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <div>
            <label className="mb-2 block">{t.form.name}</label>

            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder={t.form.namePlaceholder}
              className="h-14 w-full rounded-xl border border-transparent bg-white px-4 outline-none focus:border-[#355070]"
            />
          </div>

          <div>
            <label className="mb-2 block">{t.form.phone}</label>

            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder={t.form.phonePlaceholder}
              className={`h-14 w-full rounded-xl border bg-white px-4 outline-none ${
                errors.phone
                  ? "border-red-500"
                  : "border-transparent focus:border-[#355070]"
              }`}
            />

            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block">{t.form.seats}</label>

            <select
              value={formData.seats}
              onChange={(e) => handleChange("seats", Number(e.target.value))}
              className="h-14 w-28 rounded-xl bg-white px-4 outline-none"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((seat) => (
                <option key={seat} value={seat}>
                  {seat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block">{t.form.additional}</label>

            <textarea
              value={formData.additional}
              onChange={(e) => handleChange("additional", e.target.value)}
              placeholder={t.form.additionalPlaceholder}
              className="h-32 w-full resize-none rounded-xl border border-transparent bg-white px-4 py-3 outline-none focus:border-[#355070]"
            />
          </div>
          <div className="mt-8 flex flex-col flex-wrap gap-4 md:flex-nowrap">
            <p>{t.contact.description}</p>
            <div className="flex items-center gap-3">
              <a
                href="tel:+37367395926"
                className="bg-accent flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl"
              >
                <img src={phone} alt="" />
              </a>

              <a
                href="https://wa.me/37367395926"
                target="_blank"
                className="bg-body flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl"
              >
                <img src={whatsapp} alt="" />
              </a>

              <a
                href="https://www.instagram.com/drum_bun_dovezet/"
                target="_blank"
                className="bg-body flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl"
              >
                <img src={instagram} alt="" />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61553870166515"
                target="_blank"
                className="bg-body flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl"
              >
                <img src={facebook} alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <label className="mb-2 block">{t.form.direction}</label>

            <select
              value={formData.direction}
              onChange={(e) => handleChange("direction", e.target.value)}
              className="h-14 w-full rounded-xl bg-white px-4 outline-none"
            >
              {directions.map((direction) => (
                <option key={direction.value} value={direction.value}>
                  {direction.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block">{t.form.departurePlace}</label>

            <select
              value={formData.pickup_point}
              onChange={(e) => handleChange("pickup_point", e.target.value)}
              className="h-14 w-full rounded-xl bg-white px-4 outline-none"
            >
              {pickupOptions.map((point) => (
                <option key={point.value} value={point.value}>
                  {point.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-3 block">{t.form.arrivalType}</label>

            <div className="flex gap-6">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  checked={formData.arrival_type === "airport"}
                  onChange={() => handleChange("arrival_type", "airport")}
                />

                <span>{t.form.airport}</span>
              </label>

              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  checked={formData.arrival_type === "city"}
                  onChange={() => handleChange("arrival_type", "city")}
                />

                <span>{t.form.city}</span>
              </label>
            </div>
          </div>

          <div>
            <label className="mb-2 block">{t.form.arrivalDate}</label>

            <input
              type="datetime-local"
              value={formData.arrival_datetime}
              onChange={(e) => handleChange("arrival_datetime", e.target.value)}
              className={`h-14 w-full rounded-xl border bg-white px-4 outline-none ${
                errors.arrival_datetime
                  ? "border-red-500"
                  : "border-transparent focus:border-[#355070]"
              }`}
            />

            {errors.arrival_datetime && (
              <p className="mt-1 text-sm text-red-500">
                {errors.arrival_datetime}
              </p>
            )}
          </div>

          {formData.arrival_type === "airport" && (
            <div>
              <label className="mb-2 block">{t.form.ticket}</label>

              <label
                className={`flex h-14 cursor-pointer items-center rounded-xl border-2 border-dashed px-4 ${
                  errors.ticket_photo ? "border-red-500" : "border-[#355070]"
                }`}
              >
                <input
                  type="file"
                  accept="image/*,.pdf"
                  className="hidden"
                  onChange={(e) =>
                    handleChange("ticket_photo", e.target.files?.[0] || null)
                  }
                />

                <span className="truncate text-[#A5A5A5]">
                  {formData.ticket_photo
                    ? formData.ticket_photo.name
                    : t.form.ticketPlaceholder}
                </span>
              </label>

              {errors.ticket_photo && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.ticket_photo}
                </p>
              )}
            </div>
          )}

          <div className="mt-auto flex flex-col gap-5 pt-6">
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) => handleChange("consent", e.target.checked)}
                className="mt-1"
              />

              <span className="text-sm leading-6">{t.form.agreement}</span>
            </label>

            {errors.consent && (
              <p className="-mt-3 text-sm text-red-500">{errors.consent}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="h-16 rounded-2xl bg-[#C79D4A] text-lg font-semibold text-white disabled:opacity-50"
            >
              {loading ? t.form.loading : t.form.button}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default MainForm;
