# gifts-cards

<h3>Consumiendo la api : https://developers.giphy.com/</h3>

<ul>
<li>Estado y Efecto de React:

const [gifs, setGifs] = useState([]): Se utiliza el hook de estado para almacenar la lista de GIFs recuperados de la API.

useEffect(() => {...}, []): Utiliza el hook de efecto para realizar la solicitud Fetch a la API cuando el componente se monta ([] como dependencia).</li>

<li>Solicitud Fetch a la API de Giphy:

const fetchGifs = async () => {...}: Define una función asincrónica para realizar la solicitud Fetch a la API de Giphy.

const response = await fetch(...): Utiliza fetch para realizar la solicitud a la API de Giphy con la clave de API y el término de búsqueda.

const data = await response.json(): Convierte la respuesta a formato JSON y almacena los datos en el estado gifs mediante setGifs.</li>

<li>Renderizado de Componentes de React:

Se utiliza JSX para renderizar componentes de React, como GifCardWrapper, GifList, y GifItem.

{gifs.map((gif) => (...))}: Utiliza el método map para iterar sobre la lista de GIFs y renderizar un componente GifItem para cada uno.</li>

<li>Estilos con Styled Components:

Se asume que GifCardWrapper, GifList, y GifItem son componentes estilizados utilizando Styled Components, ya que se utilizan en el código.</li>

<li>Presentación de los GIFs en la Página:

La lista de GIFs recuperada de la API se presenta en la página mediante el mapeo y renderizado de cada GIF utilizando la etiqueta <img> en los componentes GifItem.</li>

<li>Manejo de Errores:

Se implementa un manejo básico de errores en caso de que la solicitud Fetch no sea exitosa. Se imprime un mensaje de error en la consola.</li>

</ul>
  
</ul>
