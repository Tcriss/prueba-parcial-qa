# Pruebas Unitarias para PokeAPI con Jest

Caso de estudio PokeApi para pruebas.

### Descripción

- **Obtención de datos básicos:** Verifica que la respuesta de la API sea exitosa (código 200). Verifica que el ID y el nombre del Pokémon sean correctos.

- **Habilidad principal "limber":** Verifica que Ditto tenga la habilidad "limber" y que no sea una habilidad oculta.

- **Habilidad oculta "imposter":** Verifica que Ditto tenga la habilidad oculta "imposter".

- **Movimiento "transform":**: Verifica que Ditto solo tenga el movimiento "transform".

- **Items que puede tener:** Verifica que Ditto pueda tener "metal-powder" y "quick-powder".

### Configuración

1.  **Activa pnpm:**

    ```bash
    Corepack enable pnpm
    Corepack use pnpm@latest
    ```

2.  **Instala las dependencias:**

    ```bash
    pnpm install
    ```

### Ejecución de las Pruebas

Para ejecutar las pruebas, utiliza el siguiente comando:

```bash
pnpm test