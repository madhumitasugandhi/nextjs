import getData from '../../../../services/getData';

const UserId = async ({ params }) => {
  const { id } = await params;
  const users = await getData();
  const userId = parseInt(id);
  const userInfo = users.find((u) => u.id === userId);

  if (!userInfo) {
    return <h2>User not found</h2>;
  }

  return (
    <>
      <h2>User Info:</h2>
      <h2>User ID: {userInfo.id}</h2>
      <h2>User NAME: {userInfo.name}</h2>
      <h2>User Email ID: {userInfo.email}</h2>
    </>
  );
};

export default UserId;

export async function generateStaticParams() {
  const users = await getData();
  return users.map((user) => ({
    id: user.id.toString(),
  }));
}
