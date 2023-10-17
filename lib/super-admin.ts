export const isSuperAdmin = (role?: string | null) => {
  return role !== "super_admin";
};
