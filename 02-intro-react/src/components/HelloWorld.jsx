export function HelloWorld({ langName, id, title = "Hello World", fullName }) {
  return (
    <>
      <div key={id}>
        <h1>{title}</h1>
        <h2>Estás aprendiendo sobre {langName}</h2>
        <p>Creado por: {fullName.name + " " + fullName.lastname}</p>
      </div>
    </>
  );
}
