import { useForm } from '../../Hooks/useform'; import React from 'react';
import PerfilBarberia from './PerfilBarberia';
import FormularioBarberia from './FormularioBarberia';

export const MiBarberia = () => {
  const { formState, funcion } = useForm({
    nombres: '',
    apellidos: '',
    email: '',
    telefono: '',
    ciudad: 'Seleccionar',
  });

  return (
    <>
      <main id="main" className="p-2 d-flex mt-4 justify-content-center">
        <div className="d-flex justify-content-evenly flex-wrap">
          <PerfilBarberia
            nombres={formState.nombres}
            apellidos={formState.apellidos}
            ciudad={formState.ciudad}
          />
          <FormularioBarberia formState={formState} funcion={funcion} />
        </div>
      </main>
    </>
  );
};
