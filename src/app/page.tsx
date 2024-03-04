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
import { BiMoney } from "react-icons/bi";
import { InputCurrency } from "@/components/Atoms/InputCurrency";
import { BsArrowRight } from "react-icons/bs";

const comida =
  "https://scontent.faqp1-1.fna.fbcdn.net/v/t1.6435-9/81981815_630752827737495_526856079057879040_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=300f58&_nc_eui2=AeEjtzhQC0AYQBGeGIYMkxJQa9Sr3TZqGk1r1KvdNmoaTeqnvhj4ZkUr3Yk4OqHyBVJ07QCfdBPumN8NQ_eJZTY-&_nc_ohc=I_fIiUuzdxEAX9KZFIa&_nc_ht=scontent.faqp1-1.fna&oh=00_AfDry2uxfpoRlxgx4hcPvHUjzCXu8Qx-eKj028HBUqFq4A&oe=66099286";

const selectTestDataCurrency = [
  { icon: comida, value: "Dinero", label: "Dinero" },
  { icon: comida, value: "Comida", label: "Comida" },
];
export default function Home() {
  const [val, setVal] = useState("");
  const [currency, setCurrency] = useState({
    icon: comida,
    value: "Dinero",
    label: "Dinero",
  });
  return (
    <main className="root-container min-h-screen w-full bg-white text-primary">
      <div className="w-full max-w-[640px]">
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
        <CodeInput
          keyboardType="password"
          inputMode="numeric"
          onTextChange={setVal}
          length={6}
        />
        <AccountCard
          icon={<BiMoney />}
          title="Mi cuenta en"
          moneyType="USD"
          moneyValue={parseInt("40190117")}
        />
        <GroupCircleButtons items={GROUP_CIRCLE_BUTTON_ITEMS} />
      </div>
    </main>
  );
}
