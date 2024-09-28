export const createAuthSlice = (set) => (
    {
        resellerInfo:undefined,
        setResellerInfo:(resellerInfo) => set({ resellerInfo }),
    }
);