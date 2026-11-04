import { atom, read, update } from 'claude-code'
import type { Register } from 'claude-code'

const PANE = 'ki-agenten'
const TITEL = 'KI-Agenten'

// Welcher Bereich aufgeklappt ist ('' = keiner).
const offen = atom({ plugin: 'ki-agenten', key: 'offen' } as const, '📧 Office', {
  shape: 'offen-1',
})

const BEREICHE: [string, string[]][] = [
  ['💰 Vertrieb', ['Sales Outreach', 'Proposal Strategist', 'Offer & Lead Gen Strategist', 'Outbound Strategist', 'Discovery Coach', 'Deal Strategist', 'Account Strategist', 'Sales Engineer', 'Pipeline Analyst', 'Pricing Analyst', 'Customer Success Manager', 'Sales Coach']],
  ['✍️ Content & Marketing', ['Social-Media-Content-Creator', 'Content Creator', 'LinkedIn Content Creator', 'SEO Specialist', 'Email Marketing Strategist', 'Social Media Strategist', 'Instagram Curator', 'TikTok Strategist', 'Video Optimization Specialist', 'PR & Communications Manager', 'Growth Hacker', 'Carousel Growth Engine', 'Short-Video Editing Coach', 'Podcast Strategist', 'Global Podcast Strategist', 'Twitter Engager', 'X/Twitter Intelligence Analyst', 'Reddit Community Builder', 'Developer Community Builder', 'Book Co-Author', 'AEO Foundations Architect', 'Agentic Search Optimizer', 'AI Citation Strategist', 'App Store Optimizer', 'Cross-Border E-Commerce Specialist', 'Livestream Commerce Coach', 'Brand Guardian', 'Visual Storyteller', 'Image Prompt Engineer', 'Inclusive Visuals Specialist', 'Trend Researcher', 'Feedback Synthesizer']],
  ['📣 Paid Media', ['PPC Campaign Strategist', 'Paid Social Strategist', 'Ad Creative Strategist', 'Paid Media Auditor', 'Programmatic & Display Buyer', 'Search Query Analyst', 'Tracking & Measurement Specialist']],
  ['👥 Teamführung & Personal', ['Chief of Staff', 'Change Management Consultant', 'Organizational Psychologist', 'Corporate Training Designer', 'HR Onboarding', 'Recruitment Specialist', 'Senior Project Manager', 'Project Shepherd', 'Sprint Prioritizer']],
  ['📧 Office', ['E-Mail-Manager', 'Meeting Notes Specialist', 'Document Generator', 'Executive Summary Generator', 'Customer Service', 'Support Responder', 'Legal Document Review', 'Analytics Reporter', 'Report Distribution Agent', 'Sales Data Extraction Agent', 'Data Consolidation Agent', 'Email Intelligence Engineer']],
  ['📊 Finanzen', ['Bookkeeper & Controller', 'Finance Tracker', 'FP&A Analyst', 'Financial Analyst', 'Tax Strategist', 'Accounts Payable Agent']],
  ['⚙️ Digitalisierung & Prozesse', ['Automation Governance Architect', 'Workflow Architect', 'Workflow Optimizer', 'Operations Manager', 'Business Strategist', 'Supply Chain Strategist', 'Agents Orchestrator', 'MCP Builder']],
  ['🔒 Recht & Datenschutz', ['Data Privacy Officer', 'Legal Compliance Checker', 'Compliance Auditor']],
]

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    await $.command.register({
      name: 'agenten',
      description: 'Seitenleiste mit allen KI-Agenten öffnen',
    })
    const r = await $.ui.open({ id: PANE, title: TITEL })
    $.ui.status(r.isPlaced ? '🧭 KI-Agenten-Leiste offen' : '🧭 /agenten – Agentenliste')
    return next(e)
  })

  on('command.run', { command: 'agenten' }, async $ => {
    const r = await $.ui.open({ id: PANE, title: TITEL, focus: true })
    if (r.isPlaced) return { text: 'Agenten-Leiste geöffnet.' }
    const liste = BEREICHE.map(([b, a]) => `${b}\n` + a.map(n => `  • ${n}`).join('\n')).join('\n\n')
    return { text: `Die App zeigt hier keine Leiste an – hier die Liste:\n\n${liste}\n\nAufruf: „Nutze den Agenten „Name“: …“` }
  })

  on('ui.render', { component: 'Pane', requestId: PANE }, async ($, e) => {
    const { Box, Text, Button } = $.ui.resolve(e)
    const aktiv = await read($, offen)

    return (
      <Box flexDirection="column">
        <Text dimColor>Bereich aufklappen, dann Agent anklicken – der Auftrag landet im Eingabefeld.</Text>
        {BEREICHE.map(([bereich, agenten]) => (
          <Box key={bereich} flexDirection="column">
            <Button
              key={`b:${bereich}`}
              label={`${aktiv === bereich ? '▾' : '▸'} ${bereich} (${agenten.length})`}
              onPress={() => void update($, offen, cur => (cur === bereich ? '' : bereich))}
            />
            {aktiv === bereich &&
              agenten.map(name => (
                <Button
                  key={`a:${name}`}
                  plain
                  label={`   • ${name}`}
                  onPress={() =>
                    void $.prompt.fill({ text: `Nutze den Agenten „${name}“: `, mode: 'replace' })
                  }
                />
              ))}
          </Box>
        ))}
      </Box>
    )
  })
}
