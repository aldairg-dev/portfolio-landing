"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const skillCategories = [
  {
    id: "backend",
    name: "Backend",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 75 },
      { name: "PHP", level: 80 },
      { name: "Laravel", level: 90 },
      { name: "Java", level: 80 },
      { name: "Spring Boot", level: 90 },
      // { name: "REST API", level: 90 },
    ],
  },
  {
    id: "database",
    name: "Bases de Datos",
    skills: [
      { name: "MongoDB", level: 65 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 80 },
      // { name: "Firebase", level: 80 },
      // { name: "Redis", level: 65 },
      // { name: "Supabase", level: 70 },
    ],
  },
  {
    id: "tools",
    name: "Herramientas",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "Postman", level: 90 },
      { name: "Swagger", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mis Habilidades
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un conjunto de tecnologías y herramientas que domino para crear
            soluciones digitales eficientes y escalables.
          </p>
        </motion.div>

        <Tabs defaultValue="frontend" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent
              key={category.id}
              value={category.id}
              className="space-y-8"
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-primary rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.1 }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
