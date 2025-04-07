import Button from './button';
import Card from './card';
import { useState } from 'react';

export default function ProveedorApp() {
    const [selected, setSelected] = useState(null);

    return (
        <div className="container">
            <Card className="m-4">
                <Card.Content>
                    <h2>Proveedor {selected ? selected : "Sin seleccionar"}</h2>
                </Card.Content>
            </Card>
            <Button onClick={() => setSelected("Proveedor 1")}>Seleccionar Proveedor 1</Button>
            <Button onClick={() => setSelected("Proveedor 2")}>Seleccionar Proveedor 2</Button>
        </div>
    );
}
