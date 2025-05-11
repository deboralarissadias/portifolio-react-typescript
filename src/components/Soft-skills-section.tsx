"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, Users, Scale, Crown, Lightbulb, MessageSquare, Rocket, Mountain } from "lucide-react"
import "../assets/styles/components/Soft-skills-section.css"

export default function SoftSkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  const skills = [
    { name: "Empatia", icon: Heart, color: "#263138" },
    { name: "Trabalho em equipe", icon: Users, color: "#445964" },
    { name: "Ética", icon: Scale, color: "#263138" },
    { name: "Liderança", icon: Crown, color: "#445964" },
    { name: "Resolução de problemas", icon: Lightbulb, color: "#263138" },
    { name: "Comunicação", icon: MessageSquare, color: "#445964" },
    { name: "Proatividade", icon: Rocket, color: "#263138" },
    { name: "Resiliência", icon: Mountain, color: "#445964" },
  ]

  return (
    <section className="soft-skills-section">
      <h3 className="soft-skills-title">Soft Skills</h3>

      <div className="soft-skills-grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon
          return (
            <motion.div
              key={index}
              className="skill-item"
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div
                className="skill-icon-container"
                style={{
                  backgroundColor: skill.color,
                  transform: hoveredSkill === index ? "translateY(-5px)" : "translateY(0)",
                  boxShadow:
                    hoveredSkill === index
                      ? "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                      : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Icon className="skill-icon" />
              </div>
              <p className="skill-name">{skill.name}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
