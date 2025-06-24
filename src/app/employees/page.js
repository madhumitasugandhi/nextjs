import Link from "next/link";

const Employees = () => {
  return (
    <>
      <h2>Employees</h2>
      <ul>
        <li><Link href="/employees/madhumita">Madhumita</Link></li>
        <li><Link href="/employees/pooja">Pooja</Link></li>
        <li><Link href="/employees/shikha">Shikha</Link></li>
      </ul>
    </>
  );
};

export default Employees;

