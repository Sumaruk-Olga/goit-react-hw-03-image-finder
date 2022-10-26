export function Image({ data }) {
    // console.log(data);
    return <img src={data.src} alt={data.alt} />
}