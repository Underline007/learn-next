"use client";

import { useState, useRef, useEffect } from "react";
import {
  CloudLightningIcon,
  FileIcon,
  MoreHorizontalIcon,
  PlusIcon,
  RefreshCwIcon,
  SearchIcon,
  SendIcon,
  SettingsIcon,
  ShareIcon,
  Grid3X3Icon,
  StarIcon,
  XIcon,
  EditIcon,
  PanelRight,
} from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function FeaturesSection() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<
    { role: "user" | "bot"; text: string }[]
  >([]);

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { role: "user", text: inputValue }]);

    // Simulate bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Đây là câu trả lời demo từ Antco AI dựa trên nội dung bạn vừa nhập.",
        },
      ]);
    }, 800);

    setInputValue("");
  };

  const dataFiles = [
    { type: "file", name: "Nghị quyết 123 NQ/-CP" },
    { type: "recording", name: "Ghi âm cuộc họp lãnh đạo" },
    { type: "file", name: "Báo cáo tài chính Q3 2024" },
    { type: "file", name: "Phân tích thị trường AI" },
    { type: "recording", name: "Cuộc họp với khách hàng" },
  ];

  const tools = [
    { icon: "/images/report.svg", title: "Tạo báo cáo" },
    { icon: "/images/summarize.svg", title: "Tóm tắt" },
    { icon: "/images/cloud.svg", title: "Số hóa tài liệu" },
    { icon: "/images/record.svg", title: "Bóc băng ghi âm" },
    { icon: "/images/search.svg", title: "Phân tích tham mưu" },
    { icon: "/images/assistant.svg", title: "Tra cứu pháp luật" },
  ];

  const topNav = [
    { icon: SettingsIcon },
    { icon: ShareIcon },
    { icon: Grid3X3Icon },
  ];

  return (
    <section className="flex flex-col items-center w-full px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-[100px] gap-12 md:gap-16">
      {/* Header */}
      <header className="flex flex-col items-center gap-3 text-center w-full max-w-[640px]">
        <h2 className="text-[28px] md:text-[40px] lg:text-[56px] font-semibold leading-[130%] text-primary-3">
          Khám Phá Sức Mạnh Chatbot AI Cùng Antco
        </h2>
        <p className="text-[14px] md:text-base lg:text-[20px] leading-[160%] text-neutral-3">
          Trợ lý ảo Antco kết hợp công nghệ NLP tiên tiến, giúp người dùng tương
          tác liền mạch với Trợ lý ảo Antco. <br />
          Tham gia demo để chứng kiến sức mạnh của trí tuệ nhân tạo trong việc
          tối ưu hóa năng suất làm việc!
        </p>
      </header>

      {/* Content container */}
      <div className="w-full max-w-[1520px] bg-[#EEF2F8] border-4 lg:border-[16px] border-[#dfe5ee30] rounded-[10px] lg:rounded-[40px] overflow-hidden">
        {/* Top nav */}
        <div className="flex items-center justify-between px-4 py-2 lg:px-6 lg:py-4 border-b border-[#dee4ed30]">
          <span className="font-bold text-primary-3">Antco</span>
          <div className="flex items-center gap-2 lg:gap-3">
            <Button className="bg-gradient-to-r from-[#2BA9FA] to-[#1851C1] text-white rounded-full px-3 py-1.5 lg:px-4 lg:py-2 flex items-center gap-1.5 text-xs lg:text-sm">
              <CloudLightningIcon className="w-3 h-3 lg:w-4 lg:h-4" />
              Nâng cấp
            </Button>
            {topNav.map((btn, i) => (
              <Button
                key={i}
                size="sm"
                variant="ghost"
                className="rounded-full bg-black/5 backdrop-blur-md w-7 h-7 lg:w-8 lg:h-8 flex items-center justify-center"
              >
                <btn.icon className="w-3.5 h-3.5 lg:w-5 lg:h-5 text-neutral-1" />
              </Button>
            ))}
            <Avatar className="bg-primary-2 w-7 h-7 lg:w-8 lg:h-8">
              <AvatarFallback className="text-white font-semibold text-xs">
                T
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[304px_1fr_304px] gap-4 lg:gap-6 p-4 lg:p-6">
          {/* Left Sidebar */}
          <Card className="h-[300px] lg:h-[739px]">
            <Card.Content className="flex flex-col h-full p-3 lg:p-4 gap-3 lg:gap-4">
              <div className="flex justify-between items-center border-b pb-2 text-sm font-semibold text-neutral-1">
                Dữ liệu
                <PanelRight className="w-4 h-4" />
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1 border-primary text-primary text-xs lg:text-sm"
                >
                  <PlusIcon className="w-4 h-4 mr-1" /> Thêm
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-primary text-primary text-xs lg:text-sm"
                >
                  <StarIcon className="w-4 h-4 mr-1" /> Khám phá
                </Button>
              </div>

              <div className="flex items-center gap-2 border px-2 py-1.5 rounded-md text-sm">
                <SearchIcon className="w-4 h-4 text-neutral-3" />
                <span className="text-neutral-3">Tìm kiếm</span>
              </div>

              <div className="flex flex-col gap-2 overflow-y-auto text-xs">
                {dataFiles.map((file, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border px-2 py-1.5 rounded-md"
                  >
                    <div className="flex items-center gap-2">
                      {file.type === "file" ? (
                        <FileIcon className="w-4 h-4 text-neutral-1" />
                      ) : (
                        <Image
                          src="/images/recording.svg"
                          alt="Recording"
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                      )}
                      <span className="text-neutral-1">{file.name}</span>
                    </div>
                    <XIcon className="w-4 h-4 text-neutral-3" />
                  </div>
                ))}
              </div>
            </Card.Content>
          </Card>

          {/* Chat Section */}
          <Card className="h-[400px] lg:h-[739px]">
            <Card.Content className="flex flex-col h-full">
              <div className="flex justify-between items-center border-b px-3 py-2 text-sm">
                <h3 className="font-semibold text-neutral-1">Chat</h3>
                <Button variant="outline" size="sm" className="text-xs">
                  <RefreshCwIcon className="w-4 h-4 mr-1" /> Làm mới
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3">
                {messages.length === 0 ? (
                  <div className="flex flex-col flex-1 justify-center items-center gap-3 lg:gap-6 text-center">
                    <Image
                      src="/images/logo_icon.svg"
                      alt="welcome"
                      width={40}
                      height={40}
                      className="w-10 h-10 lg:w-16 lg:h-20"
                    />
                    <span className="text-base lg:text-lg font-semibold bg-gradient-to-r from-[#2BA9FA] to-[#1851C1] bg-clip-text text-transparent">
                      Chào mừng đến với Antco AI!
                    </span>
                  </div>
                ) : (
                  messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
                        msg.role === "user"
                          ? "ml-auto bg-primary-2 text-white"
                          : "mr-auto bg-white text-neutral-1 border"
                      }`}
                    >
                      {msg.text}
                    </div>
                  ))
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Input */}
              <div className="flex items-center gap-2 border rounded-lg px-3 py-2 mt-auto mx-3 mb-3 text-sm">
                <Input
                  placeholder="Start typing..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className="border-none focus:ring-0 text-sm flex-1"
                />
                <Button
                  size="sm"
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className={`rounded-full transition-colors ${
                    inputValue.trim()
                      ? "bg-gradient-to-r from-[#2BA9FA] to-[#1851C1] text-white"
                      : "bg-black/5 text-neutral-3"
                  }`}
                >
                  <SendIcon className="w-4 h-4" />
                </Button>
              </div>
            </Card.Content>
          </Card>

          {/* Right Sidebar */}
          <Card className="h-[300px] lg:h-[739px]">
            <Card.Content className="flex flex-col h-full p-3 lg:p-4 gap-4">
              <div className="flex justify-between items-center border-b pb-2 text-sm font-semibold text-neutral-1">
                Công cụ
                <MoreHorizontalIcon className="w-4 h-4 text-neutral-1" />
              </div>

              <div className="grid grid-cols-2 gap-2">
                {tools.map((t, i) => (
                  <Card
                    key={i}
                    className="p-2 lg:p-3 flex flex-col items-center justify-center"
                  >
                    <Image
                      src={t.icon}
                      alt={t.title}
                      width={24}
                      height={24}
                      className="w-6 h-6 lg:w-8 lg:h-8"
                    />
                    <span className="text-xs lg:text-sm mt-1 text-neutral-1 font-semibold">
                      {t.title}
                    </span>
                  </Card>
                ))}
              </div>

              <div className="text-xs">
                <h4 className="font-semibold text-neutral-1 mb-2">
                  Tiến trình (1)
                </h4>
                <Card className="p-2">
                  <div className="flex items-center gap-2">
                    <RefreshCwIcon className="w-4 h-4" />
                    <span className="font-semibold">
                      Ghi âm cuộc họp lãnh đạo
                    </span>
                  </div>
                  <span className="text-neutral-3">Đang tạo báo cáo...</span>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex-1 h-1 bg-[#ECF2F8] rounded-full">
                      <div className="h-1 w-[20%] bg-gradient-to-r from-[#2BA9FA] to-[#1851C1] rounded-full"></div>
                    </div>
                    <span>20%</span>
                  </div>
                </Card>
              </div>

              <div className="flex flex-col gap-2 items-start text-xs">
                <h4 className="font-semibold text-neutral-1">Ghi chú</h4>
                <Button size="sm" variant="ghost" className="rounded-full p-1">
                  <EditIcon className="w-4 h-4" />
                </Button>
                <span className="text-neutral-3">Chưa có ghi chú nào</span>
              </div>
            </Card.Content>
          </Card>
        </div>
      </div>
    </section>
  );
}
