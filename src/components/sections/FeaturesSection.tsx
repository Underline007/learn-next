"use client";

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
} from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

export function FeaturesSection() {
  const dataFiles = [
    { type: "file", name: "Nghị quyết 123 NQ/-CP" },
    { type: "recording", name: "Ghi âm cuộc họp lãnh đạo" },
    { type: "file", name: "Báo cáo tài chính Q3 2024" },
    { type: "file", name: "Phân tích thị trường AI" },
    { type: "recording", name: "Cuộc họp với khách hàng" },
  ];

  const tools = [
    { icon: "/document-2.png", title: "Tạo báo cáo" },
    { icon: "/paper-1.png", title: "Tóm tắt" },
    { icon: "/icon-solution-4.svg", title: "Số hóa tài liệu" },
    { icon: "/icon-solution-3.svg", title: "Bóc băng ghi âm" },
    { icon: "/search-1.png", title: "Phân tích tham mưu" },
    { icon: "/scales-02.svg", title: "Tra cứu pháp luật" },
  ];

  const topNav = [
    { icon: SettingsIcon },
    { icon: ShareIcon },
    { icon: Grid3X3Icon },
  ];

  return (
    <section className="flex flex-col items-center w-full px-4 md:px-8 lg:px-16 py-16 lg:py-[100px] gap-16">
      {/* Header */}
      <header className="flex flex-col gap-5 text-center max-w-[1106px]">
        <h2 className="text-[28px] md:text-[40px] lg:text-[56px] font-semibold text-primary-3 leading-[130%]">
          Khám Phá Sức Mạnh Chatbot AI Cùng Antco
        </h2>
        <p className="text-neutral-3 text-sm md:text-base lg:text-[20px] leading-[160%]">
          Trợ lý ảo Antco kết hợp công nghệ NLP tiên tiến, giúp người dùng tương
          tác liền mạch với Trợ lý ảo Antco. <br />
          Tham gia demo để chứng kiến sức mạnh của trí tuệ nhân tạo trong việc
          tối ưu hóa năng suất làm việc!
        </p>
      </header>

      {/* Content container */}
      <div className="relative w-full max-w-[1520px] bg-[#EEF2F8] border-[16px] border-[#dfe5ee30] rounded-[40px] overflow-hidden">
        {/* Top Nav */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#dee4ed30]">
          <Image
            src="/frame-170-1.svg"
            alt="Logo"
            width={100}
            height={32}
            className="h-6 md:h-8 w-auto"
          />
          <div className="flex items-center gap-3">
            <Button className="bg-gradient-to-r from-[#2BA9FA] to-[#1851C1] text-white rounded-full px-4 py-2 flex items-center gap-2">
              <CloudLightningIcon className="w-4 h-4" />
              Nâng cấp
            </Button>
            {topNav.map((btn, i) => (
              <Button
                key={i}
                size="sm"
                variant="ghost"
                className="rounded-full bg-black/5 backdrop-blur-md"
              >
                <btn.icon className="w-5 h-5 text-neutral-1" />
              </Button>
            ))}
            <Avatar className="bg-primary-2 w-8 h-8">
              <AvatarFallback className="text-white font-semibold">
                T
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Main 3-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[304px_1fr_304px] gap-6 p-4 lg:p-6">
          {/* Left Sidebar (Data) */}
          <Card className="h-[600px] lg:h-[739px]">
            <Card.Content className="flex flex-col h-full p-4 gap-4">
              <div className="flex justify-between items-center border-b pb-2">
                <h3 className="font-semibold text-neutral-1">Dữ liệu</h3>
                <Image
                  src="/layout-right.svg"
                  alt="layout"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1 border-primary text-primary"
                >
                  <PlusIcon className="w-4 h-4 mr-2" /> Thêm
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-primary text-primary"
                >
                  <StarIcon className="w-4 h-4 mr-2" /> Khám phá
                </Button>
              </div>

              <div className="flex items-center gap-2 border px-3 py-2 rounded-md">
                <SearchIcon className="w-4 h-4 text-neutral-3" />
                <span className="text-sm text-neutral-3">Tìm kiếm</span>
              </div>

              <div className="flex flex-col gap-2 overflow-y-auto">
                {dataFiles.map((file, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border px-3 py-2 rounded-md"
                  >
                    <div className="flex items-center gap-2">
                      {file.type === "file" ? (
                        <FileIcon className="w-4 h-4 text-neutral-1" />
                      ) : (
                        <Image
                          src="/recording-02.svg"
                          alt="Recording"
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                      )}
                      <span className="text-xs text-neutral-1">
                        {file.name}
                      </span>
                    </div>
                    <XIcon className="w-4 h-4 text-neutral-3" />
                  </div>
                ))}
              </div>
            </Card.Content>
          </Card>

          {/* Chat */}
          <Card className="h-[600px] lg:h-[739px]">
            <Card.Content className="flex flex-col h-full">
              <div className="flex justify-between items-center border-b px-4 py-2">
                <h3 className="font-semibold text-neutral-1">Chat</h3>
                <Button variant="outline" size="sm">
                  <RefreshCwIcon className="w-4 h-4 mr-1" /> Làm mới
                </Button>
              </div>

              <div className="flex flex-col flex-1 justify-center items-center gap-6 text-center">
                <Image
                  src="/union-5.svg"
                  alt="welcome"
                  width={64}
                  height={80}
                  className="w-16 h-20"
                />
                <span className="text-lg font-semibold bg-gradient-to-r from-[#2BA9FA] to-[#1851C1] bg-clip-text text-transparent">
                  Chào mừng đến với Antco AI!
                </span>
              </div>

              <div className="flex items-center gap-2 border rounded-lg px-3 py-2 mt-auto mx-4 mb-4">
                <Input
                  placeholder="Start typing..."
                  className="border-none focus:ring-0"
                />
                <Button size="sm" className="rounded-full bg-black/5">
                  <SendIcon className="w-4 h-4" />
                </Button>
              </div>
            </Card.Content>
          </Card>

          {/* Right Sidebar (Tools) */}
          <Card className="h-[600px] lg:h-[739px]">
            <Card.Content className="flex flex-col h-full p-4 gap-6">
              <div className="flex justify-between items-center border-b pb-2">
                <h3 className="font-semibold text-neutral-1">Công cụ</h3>
                <MoreHorizontalIcon className="w-5 h-5 text-neutral-1" />
              </div>

              {/* Tools grid */}
              <div className="grid grid-cols-2 gap-3">
                {tools.map((t, i) => (
                  <Card key={i} className="p-3 flex flex-col items-center">
                    <Image
                      src={t.icon}
                      alt={t.title}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                    <span className="text-sm mt-2 text-neutral-1 font-semibold">
                      {t.title}
                    </span>
                  </Card>
                ))}
              </div>

              {/* Progress */}
              <div>
                <h4 className="font-semibold text-neutral-1 mb-2">
                  Tiến trình (1)
                </h4>
                <Card className="p-3">
                  <div className="flex items-center gap-2">
                    <RefreshCwIcon className="w-4 h-4" />
                    <span className="text-xs font-semibold">
                      Ghi âm cuộc họp lãnh đạo
                    </span>
                  </div>
                  <span className="text-xs text-neutral-3">
                    Đang tạo báo cáo...
                  </span>
                  <div className="flex items-center gap-2 mt-2">
                    <Progress value={20} className="flex-1" />
                    <span className="text-xs">20%</span>
                  </div>
                </Card>
              </div>

              {/* Notes */}
              <div className="flex flex-col gap-2 items-start">
                <h4 className="font-semibold text-neutral-1">Ghi chú</h4>
                <Button size="sm" variant="ghost" className="rounded-full">
                  <EditIcon className="w-4 h-4" />
                </Button>
                <span className="text-xs text-neutral-3">
                  Chưa có ghi chú nào
                </span>
              </div>
            </Card.Content>
          </Card>
        </div>
      </div>
    </section>
  );
}
