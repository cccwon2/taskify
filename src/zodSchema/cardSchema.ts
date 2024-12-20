import { z } from "zod";

export const CardSchema = z.object({
  assigneeUserId: z.number(),
  dashboardId: z.number(),
  columnId: z.number(),
  title: z.string().min(1, "제목은 필수입니다"),
  description: z.string().min(1, "설명은 필수입니다"),
  dueDate: z.string().min(1, "날짜를 선택해주세요"),
  tags: z.array(z.string()).min(1, "태그를 1개 이상 입력해주세요"),
  imageUrl: z.string().nullable(),
});

export type CardSchemaType = z.infer<typeof CardSchema>;

export const UpdateCardSchema = z.object({
  assigneeUserId: z.number().nullable(),
  columnId: z.number(),
  title: z.string().min(1, "제목은 필수입니다"),
  description: z.string().min(1, "설명은 필수입니다"),
  dueDate: z.string().min(1, "날짜를 선택해주세요"),
  tags: z.array(z.string()).min(1, "태그를 1개 이상 입력해주세요"),
  imageUrl: z.string().nullable(),
});

export type UpdateCardSchemaType = z.infer<typeof UpdateCardSchema>;
