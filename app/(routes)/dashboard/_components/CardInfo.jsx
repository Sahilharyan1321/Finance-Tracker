'use client'

import { useEffect, useState } from "react"
import { PiggyBank, ReceiptText, Wallet, Sparkles, CircleDollarSign } from "lucide-react"
import { motion } from "framer-motion"
import formatNumber from "@/utils"
import getFinancialAdvice from "@/utils/getFinancialAdvice"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function CardInfo({ budgetList = [], incomeList = [] }) {
  const [totalBudget, setTotalBudget] = useState(0)
  const [totalSpend, setTotalSpend] = useState(0)
  const [totalIncome, setTotalIncome] = useState(0)
  const [financialAdvice, setFinancialAdvice] = useState("")

  useEffect(() => {
    if (budgetList.length > 0 || incomeList.length > 0) {
      calculateCardInfo()
    }
  }, [budgetList, incomeList])

  useEffect(() => {
    if (totalBudget > 0 || totalIncome > 0 || totalSpend > 0) {
      const fetchFinancialAdvice = async () => {
        const advice = await getFinancialAdvice(totalBudget, totalIncome, totalSpend)
        setFinancialAdvice(advice)
      }
      fetchFinancialAdvice()
    }
  }, [totalBudget, totalIncome, totalSpend])

  const calculateCardInfo = () => {
    let totalBudget_ = 0
    let totalSpend_ = 0
    let totalIncome_ = 0

    budgetList.forEach((element) => {
      totalBudget_ += Number(element.amount)
      totalSpend_ += element.totalSpend
    })

    incomeList.forEach((element) => {
      totalIncome_ += element.totalAmount
    })

    setTotalIncome(totalIncome_)
    setTotalBudget(totalBudget_)
    setTotalSpend(totalSpend_)
  }

  const cardData = [
    { title: "Total Budget", value: totalBudget, icon: PiggyBank, color: "bg-blue-500" },
    { title: "Total Spend", value: totalSpend, icon: ReceiptText, color: "bg-green-500" },
    { title: "No. Of Budget", value: budgetList.length, icon: Wallet, color: "bg-yellow-500" },
    { title: "Sum of Income Streams", value: totalIncome, icon: CircleDollarSign, color: "bg-purple-500" },
  ]

  return (
    <div className="space-y-8">
      {budgetList.length > 0 ? (
        <>
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
              <CardTitle className="flex items-center justify-between">
                <span>Grok AI (Limited Usage)</span>
                <Sparkles className="h-6 w-6" />
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-muted-foreground">{financialAdvice || "Loading financial advice..."}</p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cardData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <item.icon className={`${item.color} text-white p-3 rounded-full h-12 w-12`} />
                      <span className="text-2xl font-bold">
                        {item.title === "No. Of Budget" ? item.value : `₹${formatNumber(item.value)}`}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                    {item.title !== "No. Of Budget" && (
                      <Progress
                        value={(item.value / Math.max(totalBudget, totalSpend, totalIncome)) * 100}
                        className="mt-2"
                      />
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} className="h-[140px]">
              <CardContent className="p-6">
                <div className="animate-pulse space-y-4">
                  <div className="h-12 w-12 bg-slate-200 rounded-full"></div>
                  <div className="h-4 w-3/4 bg-slate-200 rounded"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}