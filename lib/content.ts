import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import { CourseFrontmatter, DownloadFrontmatter, LessonFrontmatter, TermFrontmatter } from './types';

const root = process.cwd();
const contentRoot = path.join(root, 'content');

function readMdxFile<T>(filePath: string) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return { data: data as T, content };
}

export function getTracks() {
  const dir = path.join(contentRoot, 'tracks');
  return fs.readdirSync(dir).map((file) => readMdxFile<CourseFrontmatter>(path.join(dir, file)).data);
}

export function getCourses() {
  const dir = path.join(contentRoot, 'courses');
  const slugs = fs.readdirSync(dir);
  return slugs
    .map((slug) => readMdxFile<CourseFrontmatter>(path.join(dir, slug, 'index.mdx')).data)
    .sort((a, b) => a.order - b.order);
}

export function getCourseBySlug(courseSlug: string) {
  return readMdxFile<CourseFrontmatter>(path.join(contentRoot, 'courses', courseSlug, 'index.mdx')).data;
}

export function getLessons(courseSlug: string) {
  const dir = path.join(contentRoot, 'courses', courseSlug, 'lessons');
  return fs
    .readdirSync(dir)
    .map((file) => ({ ...readMdxFile<LessonFrontmatter>(path.join(dir, file)).data, filename: file }))
    .sort((a, b) => a.order - b.order);
}

export async function getLessonCompiled(courseSlug: string, lessonSlug: string) {
  const lessonPath = path.join(contentRoot, 'courses', courseSlug, 'lessons', `${lessonSlug}.mdx`);
  const { data, content } = readMdxFile<LessonFrontmatter>(lessonPath);
  const compiled = await compileMDX({ source: content, options: { parseFrontmatter: false } });
  return { frontmatter: data, content: compiled.content };
}

export function getGlossary() {
  const dir = path.join(contentRoot, 'glossary');
  return fs
    .readdirSync(dir)
    .map((file) => readMdxFile<TermFrontmatter>(path.join(dir, file)).data)
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getDownloads() {
  const dir = path.join(contentRoot, 'downloads');
  return fs.readdirSync(dir).map((file) => readMdxFile<DownloadFrontmatter>(path.join(dir, file)).data);
}
