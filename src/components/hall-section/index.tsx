"use client";

import { useRouter } from "next/navigation";
import {
  Container, Row, Col,
} from "react-bootstrap";
import {
  Button,
} from "@radix-ui/themes";

function HallSelection() {
  const router = useRouter();

  const selectHall = (hallId:number) => {
    router.push(`/seats/${hallId}`);
  };
  const list = new Array(5).fill(0);

  return (
    <Container className="text-center mt-5">
      <h1 className="mb-4">选择放映厅</h1>
      <Row>
        {
          list.map((hallId, index) => (
            <Col>
              <Button className="!bg-[#4FC3F7]" variant="primary" onClick={() => selectHall(index + 1)}>
                放映厅
                {index + 1}
              </Button>
            </Col>
          ))
        }
        {/* <Col>
          <Button variant="primary" onClick={() => selectHall(1)}>放映厅 1</Button>
        </Col>
        <Col>
          <Button variant="primary" onClick={() => selectHall(2)}>放映厅 2</Button>
        </Col> */}
      </Row>
      {/* 你可以添加更多的放映厅选项 */}
    </Container>
  );
}

export default HallSelection;
