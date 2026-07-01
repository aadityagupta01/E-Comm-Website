import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "YourShopie. - Store Dashboard",
    description: "YourShopie. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
