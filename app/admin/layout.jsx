import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "YourShopie. - Admin",
    description: "YourShopie. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
