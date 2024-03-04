"use client";

import { AccountCard } from "@/components/Atoms/AccountCard";
import CodeInput from "@/components/Atoms/CodeInput";
import { ImagenContainer } from "@/components/Atoms/ImagenContainer";
import { TotalBalanceCard } from "@/components/Atoms/TotalBalanceCard";
import { PerformanceMoneyCard } from "@/components/Atoms/PerformanceMoneyCard";
import { FixedNavigator } from "@/components/Atoms/headerNavigator";
import { GroupCircleButtons } from "@/components/Molecules/GroupCircleButtons";
import { LandingTwoCards } from "@/components/Molecules/LandingTwoCards";
import { GROUP_CIRCLE_BUTTON_ITEMS } from "@/mocks/groupCircleButtons";
import { useState } from "react";
import { BiCheckCircle, BiMoney } from "react-icons/bi";
import { InputCurrency } from "@/components/Atoms/InputCurrency";
import { BsArrowRight, BsCheck, BsShareFill } from "react-icons/bs";
import { CustomSelect } from "@/components/Atoms/Select";
import { FormatCurrencyTwoDecimals } from "@/utils/currency";
import { Button } from "@/components/Atoms/Button";
import { VscClose } from "react-icons/vsc";

const comida =
  "https://scontent.faqp1-1.fna.fbcdn.net/v/t1.6435-9/81981815_630752827737495_526856079057879040_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=300f58&_nc_eui2=AeEjtzhQC0AYQBGeGIYMkxJQa9Sr3TZqGk1r1KvdNmoaTeqnvhj4ZkUr3Yk4OqHyBVJ07QCfdBPumN8NQ_eJZTY-&_nc_ohc=I_fIiUuzdxEAX9KZFIa&_nc_ht=scontent.faqp1-1.fna&oh=00_AfDry2uxfpoRlxgx4hcPvHUjzCXu8Qx-eKj028HBUqFq4A&oe=66099286";

const selectTestDataCurrency = [
  { icon: comida, value: "Dinero", label: "Dinero" },
  { icon: comida, value: "Comida", label: "Comida" },
];
export default function Home() {
  const [val, setVal] = useState("");
  const [currency, setCurrency] = useState();
  return (
    <main className="root-container min-h-screen w-full bg-white text-primary">
      <div className="w-full max-w-[640px]">
        <div className="px-4 py-10">
          <CustomSelect
            options={selectTestDataCurrency}
            value={currency}
            onChange={setCurrency}
            placeholder="Selecciona"
          />
        </div>
        <div className="px-4 py-10">
          <InputCurrency
            value={val}
            onChangevalue={setVal}
            label={<p>{"Tu cambias:"}</p>}
            rightIcon={<BiMoney />}
            caption={
              <div
                style={{ fontWeight: "bold" }}
                className="flex   min-h-[20px] flex-row"
              >
                <p>{"Segurir monto"}</p>
                <BsArrowRight className="ml-2 text-[18px] mt-1" />
              </div>
            }
          />
        </div>
        <div className="px-4 my-10">
          <InputCurrency
            value={val}
            onChangevalue={setVal}
            visible
            data={selectTestDataCurrency}
            label={<p>{"Recibes:"}</p>}
            caption={
              <div className="flex   min-h-[20px] flex-col">
                <p className="font-light">{"Tipo de cambio hoy:"}</p>
                <p className="font-bold">{"1 Divisa = $0.00 MXN"}</p>
                <p className="font-light">
                  {"El tipo de cambio puede variar en funcion del mercado"}
                </p>
              </div>
            }
            onChangeCurrency={setCurrency}
            selectValue={currency}
          />
        </div>
        <PerformanceMoneyCard
          icon={<BiMoney />}
          title="Saldo total"
          value={40190117}
          moneyType="MXN"
          percent="+25%"
          percentNextCode="1D"
        />
        <TotalBalanceCard
          icon={<BiMoney />}
          title="Saldo total"
          value={100000000}
          moneyType="MXN"
          caption="Al tipo de cambio actual"
        />
        {/* Pantalla Olvide mi clave */}
        <div className="flex flex-col items-center px-4 my-10">
          <p className="font-bold text-left w-full mb-14">
            Ingresa tu clave para finalizar
          </p>
          <CodeInput
            keyboardType="password"
            inputMode="numeric"
            onTextChange={setVal}
            length={6}
          />
          <p className="text-center">Olvide mi clave</p>
        </div>
        <AccountCard
          icon={<BiMoney />}
          title="Mi cuenta en"
          moneyType="USD"
          moneyValue={parseInt("40190117")}
        />
        <GroupCircleButtons items={GROUP_CIRCLE_BUTTON_ITEMS} />

        {/* Pantalla tu resumen */}
        <div className="px-4">
          <div>
            <p className="font-bold">Tu Resumen</p>
          </div>

          <div className="my-4">
            <p>Desde que cuenta cambias</p>
            <div className="flex flex-row items-center">
              <BiMoney /> <p>MXN</p> <p>*1234</p>
            </div>
          </div>
          <div className="w-full h-[2px] bg-light" />
          <div className="my-4">
            <div className="flex flex-row justify-between items-center">
              <p className="font-medium">Que Cambias?</p>
              <p className="font-bold cursor-pointer">Editar</p>
            </div>
            <div className="flex flex-row items-center">
              <div className="mr-2">
                <BiMoney />
              </div>
              <p>
                $ {FormatCurrencyTwoDecimals("1000000")} {"MXN"}
              </p>
            </div>
          </div>

          <div className="my-4">
            <div>
              <p className="font-medium">Que recibes?</p>
            </div>
            <div className="flex flex-row items-center">
              <div className="mr-2">
                <BiMoney />
              </div>
              <p>
                $ {FormatCurrencyTwoDecimals("1000000")} {"MXN"}
              </p>
            </div>
          </div>
          <div className="w-full h-[2px] bg-light" />
          <div className="my-4">
            <p className="font-medium">Tipo de cambio</p>
            <div className="flex flex-row items-center">
              <p>1BTC = </p>
              <p className="mx-1">
                {"$"}
                {FormatCurrencyTwoDecimals("68364401")}
                {"MXN"}
              </p>
            </div>
          </div>
          <div className="w-full h-[2px] bg-light" />
          <div className="my-4">
            <p className="font-medium">En que cuenta recibes?</p>
            <div className="flex flex-row items-center">
              <div className="mr-2">
                <BiMoney />
              </div>
              <p>BTC</p> <p>*1234</p>
            </div>
          </div>
          <div className="w-full">
            <Button
              text="Confirmar"
              type="button"
              variant="dark"
              className="mx-0 my-20 h-[50px] rounded-xl"
              onClick={() => {}}
            />
          </div>
        </div>

        {/* Pantalla Operacion realizada */}
        <div className="bg-secondary text-white px-4 py-10">
          <div className="flex flex-row items-center justify-end py-4">
            <BsShareFill />
            <VscClose />
          </div>
          <div className="relative bg-secondary">
            <div className="w-full h-[40px] bg-secondary"></div>
            <div
              className="h-[50px] bg-white"
              style={{
                borderStartEndRadius: 16,
                borderStartStartRadius: 16,
              }}
            >
              <BsCheck
                className="absolute bg-secondary  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-white border-[8px] px-0 m-0"
                style={{ borderRadius: 50 }}
                fontSize={65}
              />
            </div>
          </div>
          <div className="bg-white relative text-dark6 ">
            <div className="px-8">
              <p className="text-[24px] text-center mb-4 font-bold">
                Operacion realizada
              </p>
              <div className="flex flex-row">
                <p className="text-[32px]">{`${"0.00244416"} `}</p>
                <p className="text-[16px]">{`${"BTC"} `}</p>
              </div>
              <div className="flex flex-row items-center">
                <p className="text-[24px] mr-1">{`${"= $ 1,000.00 "} `}</p>
                <p className="text-[16px]">{`${" MXN"} `}</p>
              </div>
              <div className="my-4">
                <p className="text-[18px]">Tipo de cambio:</p>
                <p className="text-[18px]">1BTC = $ 683,644.01 MXN</p>
              </div>
              <div>
                <p className="text-center my-4">
                  {"Lunes 16 de enero del 2022, 14:06:30"}
                </p>
              </div>
            </div>
            <div className="h-[10px] relative  w-full">
              <div className="absolute right-0  w-full bg-light border-dashed border-[1px] " />
              <div className="w-4 h-4 bg-secondary rounded-full absolute -right-2 -top-2" />
              <div className="w-4 h-4 bg-secondary rounded-full absolute -left-2 -top-2" />
            </div>

            <div className="px-8">
              <div>
                <div>
                  <BiMoney />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
