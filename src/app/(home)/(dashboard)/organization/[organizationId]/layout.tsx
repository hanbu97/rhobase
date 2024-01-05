
// export async function generateMetadata() {

//   return {
//     title: startCase(orgSlug || "organization"),
//   };
// };

const OrganizationIdLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      {children}
    </>
  );
};

export default OrganizationIdLayout;
