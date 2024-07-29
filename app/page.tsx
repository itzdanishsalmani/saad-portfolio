import { Col1 } from "./components/Column1";
import { Col2 } from "./components/Column2"
export default function Home() {
  return (
    <div className="grid md:grid-cols-2">
      <Col1 />
      <Col2 />
    </div>
      );
}
