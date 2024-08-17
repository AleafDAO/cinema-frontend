"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import SeatPicker from "react-seat-picker";
import {
  Box,
  Button,
  Dialog,
  Flex,
} from "@radix-ui/themes";
import { Cross1Icon } from "@radix-ui/react-icons";
import {
  Container, Card,
} from "react-bootstrap";
import "@/styles/seats.css";
import clsx from "clsx";
import {
  Input,
} from "@nextui-org/react";

function Seats() {
  const [selected, setSelected] = useState("");
  const [startPrice, setStartPrice] = useState("");
  const [interval, setInterval] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [open, setOpen] = useState(false);

  const { slug } = useParams();
  const rows = [
    [
      { id: 1, number: "A1" },
      { id: 2, number: "A2" },
      { id: 3, number: "A3" },
      { id: 4, number: "A4" },
      { id: 24, number: "A5" },
      { id: 34, number: "A6" },
      { id: 44, number: "A7" },
      { id: 54, number: "A8" },
      null,
      { id: 5, number: "A9" },
      { id: 6, number: "A10" },
      { id: 7, number: "A11" },
      { id: 8, number: "A12" },
      { id: 9, number: "A13", isReserved: true },
    ],
    [
      { id: 11, number: "B1" },
      { id: 12, number: "B2" },
      { id: 13, number: "B3", isReserved: true },
      { id: 14, number: "B4" },
      { id: 74, number: "B5" },
      { id: 84, number: "B6" },
      { id: 34, number: "B7" },
      { id: 94, number: "B8" },
      null,
      { id: 15, number: "B9" },
      { id: 16, number: "B10" },
      { id: 17, number: "B11" },
      { id: 18, number: "B12" },
      { id: 19, number: "B13" },
    ],
    [
      { id: 21, number: "C1" },
      { id: 22, number: "C2" },
      { id: 23, number: "C3" },
      { id: 24, number: "C4" },
      { id: 29, number: "C5" },
      { id: 20, number: "C6" },
      { id: 99, number: "C7" },
      { id: 98, number: "C8" },
      null,
      { id: 25, number: "C9" },
      { id: 26, number: "C10" },
      { id: 27, number: "C11", isReserved: true },
      { id: 28, number: "C12" },
      { id: 29, number: "C13" },
      null,
    ],
    [
      { id: 11, number: "D1" },
      { id: 12, number: "D2" },
      { id: 13, number: "D3", isReserved: true },
      { id: 14, number: "D4" },
      { id: 74, number: "D5" },
      { id: 84, number: "D6" },
      { id: 34, number: "D7" },
      { id: 94, number: "D8" },
      null,
      { id: 15, number: "D9" },
      { id: 16, number: "D10" },
      { id: 17, number: "D11" },
      { id: 18, number: "D12" },
      { id: 19, number: "D13" },
    ],
    [
      { id: 11, number: "E1" },
      { id: 12, number: "E2" },
      { id: 13, number: "E3" },
      { id: 14, number: "E4" },
      { id: 74, number: "E5" },
      { id: 84, number: "E6" },
      { id: 34, number: "E7" },
      { id: 94, number: "E8" },
      null,
      { id: 15, number: "E9" },
      { id: 16, number: "E10" },
      { id: 17, number: "E11" },
      { id: 18, number: "E12" },
      { id: 19, number: "E13" },
    ],
    [
      { id: 11, number: "F1" },
      { id: 12, number: "F2" },
      { id: 13, number: "F3" },
      { id: 14, number: "F4" },
      { id: 74, number: "F5" },
      { id: 84, number: "F6" },
      { id: 34, number: "F7" },
      { id: 94, number: "F8" },
      null,
      { id: 15, number: "F9" },
      { id: 16, number: "F10" },
      { id: 17, number: "F11" },
      { id: 18, number: "F12" },
      { id: 19, number: "F13" },
    ],
    [
      { id: 11, number: "G1" },
      { id: 12, number: "G2" },
      { id: 13, number: "G3" },
      { id: 14, number: "G4" },
      { id: 74, number: "G5" },
      { id: 84, number: "G6" },
      { id: 34, number: "G7", isReserved: true },
      { id: 94, number: "G8" },
      null,
      { id: 15, number: "G9" },
      { id: 16, number: "G10" },
      { id: 17, number: "G11" },
      { id: 18, number: "G12" },
      { id: 19, number: "G13" },
    ],
  ];
  const price = 30;
  const totalprice = price * (selected ? 1 : 0);
  const removeSeatCallback = ({ row, number }, removeCb) => {
    setSelected(null);
    removeCb(row, number);
  };
  const addSeatCallback = ({ row, number, id }, addCb, removeCb) => {
    // 如果已有选中的座位，先取消选中
    if (selected) {
      removeSeatCallback({ row, number: selected }, removeCb);
    }

    // 更新选中的座位
    setSelected(number);
    const newTooltip = `tooltip for id-${id} added by callback`;
    addCb(row, number, id, newTooltip);
  };

  return (
    <Container className="mt-5 container">
      <h2>
        当前放映厅:
        {slug}
      </h2>
      <div className="screens">
        <h3 className="screen">SCREEN</h3>
      </div>
      <h5 className="seat_price">CLASSIC $30</h5>
      <div className="seat-picker">
        <SeatPicker
          addSeatCallback={(...args:any) => addSeatCallback(...args, removeSeatCallback)}
          removeSeatCallback={removeSeatCallback}
          rows={rows}
          alpha
          maxReservableSeats={1} // 限制最多只能选一个座位
          visible
        />
      </div>
      {selected ? (
        <Card className="mt-4 card-container">
          <Card.Body className="card-body">
            <div className="card-title-row">
              <Card.Title className="card-title">
                SEAT:
                {selected}
              </Card.Title>
              <Card.Title className="card-title">
                Price: $
                {totalprice}
              </Card.Title>
            </div>
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger>
                <Button
                  className="w-200px !bg-[#4FC3F7]"
                >
                  Continue
                </Button>
              </Dialog.Trigger>
              <Dialog.Content maxWidth="380px" minHeight="600px">
                <Flex justify="between" align="center" className="mb-2">
                  <span className="font-bold text-lg">Info</span>

                  <Dialog.Close>
                    <Cross1Icon className="cursor-pointer" />
                  </Dialog.Close>
                </Flex>
                <Input
                  label="start price"
                  value={startPrice}
                  onValueChange={setStartPrice}
                />
                <Input
                  label="interval"
                  className="mt-3"
                  value={interval}
                  onValueChange={setInterval}
                  description="In seconds"
                />
                {errMsg && <Box className="text-[#dc2626] my-2">{errMsg}</Box>}
                <Flex justify="center" align="center" className={clsx("w-full bg-[#4FC3F7] rounded-md py-2 font-bold text-center text-[#fff] mt-5 cursor-pointer", (false) && "!bg-[#ccc]")}>

                  <Box>Submit</Box>
                </Flex>
              </Dialog.Content>
            </Dialog.Root>

          </Card.Body>
        </Card>
      ) : null}
    </Container>
  );
}
export const dynamicParams = false;
export default Seats;
