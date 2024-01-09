import { EChart } from "@kbox-labs/react-echarts";
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <EChart
        width={300}
        height={200}
        color={[
          "#001C38",
          "#0A3B61",
          "#085897",
          "#0F69AF",
          "#2B8DD8",
          "#50A0DE",
          "#81BBE9",
          "#ADD2F1",
          "#D8EAF8",
        ]}
        renderer="canvas"
        legend={{}}
        tooltip={{}}
        dataset={{
          dimensions: [
            "product",
            "createDID",
            "Action 2",
            "Action 3",
            "Action 4",
            "Action 5",
            "Action 6",
            "Action 7",
          ],
          source: [
            {
              product: "Gemini",
              createDID: 43.3,
              "Action 2": 65.8,
              "Action 3": 73.7,
              "Action 4": 80.7,
              "Action 5": 85.7,
              "Action 6": 90.7,
              "Action 7": 96.7,
            },
            {
              product: "Signing Service",
              createDID: 83.1,
              "Action 2": 73.4,
              "Action 3": 55.1,
              "Action 4": 80.7,
              "Action 5": 85.7,
              "Action 6": 90.7,
              "Action 7": 96.7,
            },
            {
              product: "Transaction Service",
              createDID: 86.4,
              "Action 2": 65.2,
              "Action 3": 82.5,
              "Action 4": 80.7,
              "Action 5": 85.7,
            },
            {
              product: "Trusted-Traceability Service",
              createDID: 72.4,
              "Action 2": 53.9,
              "Action 3": 39.1,
              "Action 4": 80.7,
              "Action 5": 85.7,
              "Action 6": 90.7,
            },
          ],
        }}
        xAxis={{ type: "category" }}
        yAxis={{}}
        series={[
          { type: "bar" },
          { type: "bar" },
          { type: "bar" },
          { type: "bar" },
          { type: "bar" },
          { type: "bar" },
          { type: "bar" },
        ]}
      />
    </main>
  )
}
