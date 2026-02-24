export type Level = 'مبتدئ' | 'متوسط' | 'متقدم';

export type BaseFrontmatter = {
  title: string;
  slug: string;
  description: string;
  order: number;
  tags?: string[];
};

export type CourseFrontmatter = BaseFrontmatter & {
  level: Level;
  duration: string;
};

export type LessonFrontmatter = BaseFrontmatter & {
  duration: string;
};

export type TermFrontmatter = BaseFrontmatter;
export type DownloadFrontmatter = BaseFrontmatter & { fileUrl: string };
