import Form from "@/components/FormProveedor"
import db from "@/lib/sqlite"
import { editProveedor } from "@/lib/actions"

async function page({ searchParams }) {
  const [proveedor] = await db.all('select * from proveedores where id = ?', [searchParams.id]);

  return (
    <div>
      <h3>Editar proveedor {searchParams.id}</h3>
      <Form action={editProveedor} title='Editar proveedor' proveedor={proveedor} disabled={false} />
    </div>
  )
}


export default page