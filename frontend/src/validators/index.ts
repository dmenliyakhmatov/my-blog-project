export const required = (value: string) => {
  if (value) return undefined;

  return 'Обязательное поле';
};
