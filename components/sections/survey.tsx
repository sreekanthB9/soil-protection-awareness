"use client";

import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { SURVEY_DATA } from "@/lib/data";

const COLORS = ["#2E7D32", "#81C784", "#8D6E63", "#66BB6A", "#A5D6A7", "#4CAF50"];

export function SurveySection() {
  return (
    <section id="survey" className="section-padding bg-muted/30">
      <div className="container-custom">
        <FadeIn>
          <SectionHeading
            badge="Survey Dashboard"
            title="Community Survey Findings"
            subtitle="Data collected from 100+ farmers, agricultural workers, and villagers in Yemmiganur."
          />
        </FadeIn>

        {/* Progress Cards */}
        <StaggerContainer className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SURVEY_DATA.progressCards.map((card) => (
            <StaggerItem key={card.title}>
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">{card.title}</p>
                  <p className="mt-1 text-3xl font-bold" style={{ color: card.color }}>
                    {card.value}
                    {card.max === 100 ? "%" : ""}
                  </p>
                  <Progress
                    value={(card.value / card.max) * 100}
                    className="mt-3"
                  />
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn delay={0.1}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Participant Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={[...SURVEY_DATA.occupation]}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={4}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
                    >
                      {SURVEY_DATA.occupation.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Awareness Levels by Topic</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={[...SURVEY_DATA.awareness]} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis dataKey="topic" type="category" width={120} tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="level" fill="#2E7D32" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Fertilizer Usage Patterns</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={[...SURVEY_DATA.fertilizerUse]}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                      label
                    >
                      {SURVEY_DATA.fertilizerUse.map((_, index) => (
                        <Cell key={`fert-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.4}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Soil Erosion & Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={[...SURVEY_DATA.soilErosion]}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8D6E63" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-4 rounded-lg bg-muted p-4">
                  <p className="text-sm font-medium">Soil Testing Frequency</p>
                  <div className="mt-2 flex gap-4">
                    {SURVEY_DATA.soilTesting.map((item) => (
                      <div key={item.name} className="text-center">
                        <p className="text-2xl font-bold text-primary">{item.value}%</p>
                        <p className="text-xs text-muted-foreground">{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
