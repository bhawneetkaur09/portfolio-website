export const ABOUT_AUTHOR: string[] = [
  "I believe the best solutions come from relentless refactoring – yes, I'm that developer who rewrites working code because \"I just thought of a better way.\" My approach: build it, break it, make it better.",
  "Whether crafting smooth UIs or debugging complex systems, I bring equal parts technical rigor and creative problem-solving. Powered by curiosity, coffee, and the occasional Stack Overflow deep dive.",
  "Currently turning ideas into elegant code, one commit at a time."
];

export const AUTHOR_NAME: string = 'Bhawneet';
export const AUTHOR_FULL_NAME: string = 'Bhawneet Kaur';
export const AUTHOR_DESCRIPTION: string = 'I write code and chase clarity in systems and in life.';
export const GREETING: string = 'Hi, I\'m';

export interface NavItem {
  id: string;
  label: string;
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
]; 