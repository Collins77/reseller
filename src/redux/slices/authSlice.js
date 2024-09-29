export const createAuthSlice = (set) => (
    {
        resellerInfo:undefined,
        supplierInfo:undefined,
        setResellerInfo:(resellerInfo) => set({ resellerInfo }),
        setSupplierInfo:(supplierInfo) => set({ supplierInfo }),
    }
);