"use client";

import { useState, useRef } from "react";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { Button } from "@/components/ui/button";
import { Header } from "../layout/Header";

export function ConsultationSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    topic: "",
  });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const validate = () => {
    const newErrors: { [k: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Vui lòng nhập họ và tên";
    if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Số điện thoại phải có 10 chữ số";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Email không hợp lệ";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      // submit logic
    } else {
      if (errs.name) nameRef.current?.focus();
      else if (errs.phone) phoneRef.current?.focus();
      else if (errs.email) emailRef.current?.focus();
    }
  };

  return (
    <section
      className="relative w-full h-[100vh] bg-[#F7F8F9] 
                 bg-[url('/images/company_intro_background.png')] 
                 bg-cover bg-center
                 py-12 md:py-20 lg:py-32"
    >
      {/* Header */}
      <Header />

      {/* Nội dung */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-20">
          {/* Text bên trái */}
          <div className="space-y-6 lg:space-y-10">
            <Heading
              level={1}
              className="text-[#112639] font-bold 
                         text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-[1.36]"
            >
              Nhận tư vấn miễn phí từ chúng tôi
            </Heading>
            <Paragraph
              className="text-[#7B849F] 
                         text-base sm:text-lg lg:text-[16px] leading-6 lg:leading-7
                         max-w-[480px]"
            >
              Antco đồng hành cùng chính phủ và doanh nghiệp trên hành trình
              chuyển đổi số, mang đến các giải pháp công nghệ tùy chỉnh và tiên
              tiến.
            </Paragraph>
          </div>

          {/* Form bên phải */}
          <div
            className="bg-white rounded-2xl shadow-lg 
                       w-full max-w-[615px] p-6 sm:p-8 lg:p-10 
                       flex flex-col gap-6"
          >
            <h3 className="text-[#112639] text-xl sm:text-2xl font-semibold">
              Liên hệ với chúng tôi
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                ref={nameRef}
                type="text"
                name="name"
                placeholder="Họ và tên"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={`w-full rounded-xl px-4 py-3 bg-[#F4F9FF] border ${
                  errors.name ? "border-red-400" : "border-[#DEEAFB]"
                } focus:outline-none focus:ring-2 focus:ring-sky-400`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}

              <input
                ref={phoneRef}
                type="tel"
                name="phone"
                placeholder="Số điện thoại"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className={`w-full rounded-xl px-4 py-3 bg-[#F4F9FF] border ${
                  errors.phone ? "border-red-400" : "border-[#DEEAFB]"
                } focus:outline-none focus:ring-2 focus:ring-sky-400`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}

              <input
                ref={emailRef}
                type="email"
                name="email"
                placeholder="Địa chỉ email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`w-full rounded-xl px-4 py-3 bg-[#F4F9FF] border ${
                  errors.email ? "border-red-400" : "border-[#DEEAFB]"
                } focus:outline-none focus:ring-2 focus:ring-sky-400`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}

              <select
                name="topic"
                value={formData.topic}
                onChange={(e) =>
                  setFormData({ ...formData, topic: e.target.value })
                }
                className="w-full rounded-xl px-4 py-3 bg-[#F4F9FF] border border-[#DEEAFB] text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                <option value="">Nội dung cần tư vấn</option>
                <option>Chuyển đổi số</option>
                <option>Phát triển phần mềm</option>
                <option>Tư vấn chiến lược</option>
              </select>

              <p className="text-xs sm:text-sm text-[#7B849F]">
                *Sau khi nhận được yêu cầu, chúng tôi sẽ liên hệ với bạn qua
                thông tin được cung cấp.
              </p>

              <Button
                type="submit"
                className="w-full h-14 rounded-full text-white font-semibold 
                           bg-gradient-to-r from-[#2BA9FA] to-[#1851C1] 
                           hover:opacity-90 transition"
              >
                Gửi yêu cầu
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
