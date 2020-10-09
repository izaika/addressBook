
export type TAddLoader = ReturnType<typeof addLoader>;
export const addLoader = (id: string)=> ({
  type: 'ADD_LOADER' as const,
  id,
});

export type TRemoveLoader = ReturnType<typeof removeLoader>;
export const removeLoader = (id: string)=> ({
  type: 'REMOVE_LOADER' as const,
  id,
});
