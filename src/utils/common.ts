export const isEmail = (text: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(text);
};

export const downloadResumeFile = (path: string) => {
  const link = document.createElement("a");
  link.href = path;
  link.download = "KhaiNguyen.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
