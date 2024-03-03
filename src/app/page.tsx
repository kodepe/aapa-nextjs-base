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

export default function Home() {
  const [val, setVal] = useState();
  const comida =
    "https://scontent.faqp1-1.fna.fbcdn.net/v/t1.6435-9/81981815_630752827737495_526856079057879040_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=300f58&_nc_eui2=AeEjtzhQC0AYQBGeGIYMkxJQa9Sr3TZqGk1r1KvdNmoaTeqnvhj4ZkUr3Yk4OqHyBVJ07QCfdBPumN8NQ_eJZTY-&_nc_ohc=I_fIiUuzdxEAX9KZFIa&_nc_ht=scontent.faqp1-1.fna&oh=00_AfDry2uxfpoRlxgx4hcPvHUjzCXu8Qx-eKj028HBUqFq4A&oe=66099286";
  return (
    <main className="root-container min-h-screen w-full bg-white text-primary">
      <FixedNavigator />
      <ImagenContainer image="https://scontent.faqp1-1.fna.fbcdn.net/v/t39.30808-6/428640062_814240110715441_4377948341737206140_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHxQ1_wxIbc8cIwP3_ulYWvFt3AjUCJaNAW3cCNQIlo0H0ed9VH9CqoBCCWZZZFiuaFmVc0Il-bw5o55vZHh9gS&_nc_ohc=WjrYswxSOA0AX_12icJ&_nc_ht=scontent.faqp1-1.fna&oh=00_AfC1WUxs7zRN-pVdlXLZmleVyUj2gD_F-S3hfg5ZK8dDbw&oe=65E51474" />
      <div className="w-full max-w-[360px]">
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
      <LandingTwoCards
        image={comida}
        title="Nuestros Platos"
        description="A DIARIO, CON CARIÑO, ARTESANALMENTE Y CON LOS INSUMOS MÁS FRESCOS. ASÍ PREPARAMOS TODO. ASÍ HACEMOS QUE NUESTRAS HAMBURGUESAS Y TODA NUESTRA CARTA TENGA ESE SABOR ACHORADO QUE TANTO TE GUSTA."
      />
      <LandingTwoCards
        rtl
        image={comida}
        title="Nuestros Platos"
        description="A DIARIO, CON CARIÑO, ARTESANALMENTE Y CON LOS INSUMOS MÁS FRESCOS. ASÍ PREPARAMOS TODO. ASÍ HACEMOS QUE NUESTRAS HAMBURGUESAS Y TODA NUESTRA CARTA TENGA ESE SABOR ACHORADO QUE TANTO TE GUSTA."
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        laborum laboriosam nemo nisi quasi delectus pariatur libero totam,
        explicabo eveniet aspernatur esse ab saepe minima cupiditate tempore
        quas quo animi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        laborum laboriosam nemo nisi quasi delectus pariatur libero totam,
        explicabo eveniet aspernatur esse ab saepe minima cupiditate tempore
        quas quo animi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        laborum laboriosam nemo nisi quasi delectus pariatur libero totam,
        explicabo eveniet aspernatur esse ab saepe minima cupiditate tempore
        quas quo animi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        laborum laboriosam nemo nisi quasi delectus pariatur libero totam,
        explicabo eveniet aspernatur esse ab saepe minima cupiditate tempore
        quas quo animi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        laborum laboriosam nemo nisi quasi delectus pariatur libero totam,
        explicabo eveniet aspernatur esse ab saepe minima cupiditate tempore
        quas quo animi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        laborum laboriosam nemo nisi quasi delectus pariatur libero totam,
        explicabo eveniet aspernatur esse ab saepe minima cupiditate tempore
        quas quo animi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        laborum laboriosam nemo nisi quasi delectus pariatur libero totam,
        explicabo eveniet aspernatur esse ab saepe minima cupiditate tempore
        quas quo animi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        laborum laboriosam nemo nisi quasi delectus pariatur libero totam,
        explicabo eveniet aspernatur esse ab saepe minima cupiditate tempore
        quas quo animi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        laborum laboriosam nemo nisi quasi delectus pariatur libero totam,
        explicabo eveniet aspernatur esse ab saepe minima cupiditate tempore
        quas quo animi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        laborum laboriosam nemo nisi quasi delectus pariatur libero totam,
        explicabo eveniet aspernatur esse ab saepe minima cupiditate tempore
        quas quo animi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        laborum laboriosam nemo nisi quasi delectus pariatur libero totam,
        explicabo eveniet aspernatur esse ab saepe minima cupiditate tempore
        quas quo animi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        laborum laboriosam nemo nisi quasi delectus pariatur libero totam,
        explicabo eveniet aspernatur esse ab saepe minima cupiditate tempore
        quas quo animi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        laborum laboriosam nemo nisi quasi delectus pariatur libero totam,
        explicabo eveniet aspernatur esse ab saepe minima cupiditate tempore
        quas quo animi!
      </p>
    </main>
  );
}
