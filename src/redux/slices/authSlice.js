export const createAuthSlice = (set) => (
    {
        resellerInfo:undefined,
        supplierInfo:undefined,
        adminInfo:undefined,
        setResellerInfo:(resellerInfo) => set({ resellerInfo }),
        setSupplierInfo:(supplierInfo) => set({ supplierInfo }),
        setAdminInfo:(adminInfo) => set({ adminInfo }),
    }
);