import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
  family: 'Inter',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hjQ.ttf', fontWeight: 400 },
    { src: 'https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYAZ9hjQ.ttf', fontWeight: 600 },
    { src: 'https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYAZ9hjQ.ttf', fontWeight: 700 },
    { src: 'https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuDyYAZ9hjQ.ttf', fontWeight: 900 },
  ],
});

const pink = '#ec4899';
const blue = '#3b82f6';
const dark = '#0a0a0f';
const darkCard = '#111118';
const gray = '#9ca3af';
const grayLight = '#d1d5db';
const white = '#ffffff';

const s = StyleSheet.create({
  page: {
    backgroundColor: dark,
    fontFamily: 'Inter',
    color: white,
    paddingHorizontal: 40,
    paddingVertical: 36,
  },
  // Header
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  logo: {
    fontSize: 28,
    fontWeight: 900,
    letterSpacing: -1,
  },
  logoPink: { color: pink },
  logoBlue: { color: blue },
  badge: {
    backgroundColor: '#1a1a24',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#2a2a3a',
  },
  badgeText: {
    fontSize: 7,
    fontWeight: 700,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: pink,
  },
  divider: {
    height: 1,
    backgroundColor: '#1f1f2e',
    marginVertical: 16,
  },
  thinDivider: {
    height: 1,
    backgroundColor: '#1a1a28',
    marginVertical: 12,
  },

  // Typography
  pageTitle: {
    fontSize: 24,
    fontWeight: 900,
    color: white,
    marginBottom: 6,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 10,
    color: gray,
    lineHeight: 1.5,
    marginBottom: 20,
  },
  sectionLabel: {
    fontSize: 7,
    fontWeight: 700,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: pink,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 900,
    color: white,
    marginBottom: 6,
    letterSpacing: -0.3,
  },
  body: {
    fontSize: 9,
    color: gray,
    lineHeight: 1.6,
  },
  bodyWhite: {
    fontSize: 9,
    color: grayLight,
    lineHeight: 1.6,
  },

  // Stats grid
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 20,
  },
  statCard: {
    width: '31.5%',
    backgroundColor: darkCard,
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: '#1f1f2e',
    alignItems: 'center',
  },
  statValue: {
    fontSize: 22,
    fontWeight: 900,
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 7,
    color: gray,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    fontWeight: 600,
  },

  // 2-col
  twoCol: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  col: {
    flex: 1,
  },

  // Cards
  card: {
    backgroundColor: darkCard,
    borderRadius: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: '#1f1f2e',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: 700,
    color: white,
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 7,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  cardBody: {
    fontSize: 8,
    color: gray,
    lineHeight: 1.5,
    marginBottom: 8,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  bullet: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginTop: 3,
    marginRight: 6,
  },
  bulletText: {
    fontSize: 8,
    color: grayLight,
    flex: 1,
  },
  tagRow: {
    borderTopWidth: 1,
    borderTopColor: '#1f1f2e',
    paddingTop: 8,
    marginTop: 8,
  },
  tag: {
    fontSize: 6.5,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  // Audience
  audienceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  audienceLabel: {
    fontSize: 8,
    color: gray,
  },
  audienceValue: {
    fontSize: 8,
    fontWeight: 700,
    color: white,
  },
  bar: {
    height: 4,
    borderRadius: 2,
    backgroundColor: '#1a1a28',
    marginBottom: 8,
    overflow: 'hidden',
  },
  barFill: {
    height: 4,
    borderRadius: 2,
  },

  // Contact
  contactBox: {
    backgroundColor: darkCard,
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#1f1f2e',
    alignItems: 'center',
    marginTop: 16,
  },
  contactEmail: {
    fontSize: 14,
    fontWeight: 700,
    color: pink,
    marginBottom: 6,
  },
  contactSub: {
    fontSize: 8,
    color: gray,
    textAlign: 'center',
    lineHeight: 1.5,
  },

  // Quote
  quoteBox: {
    backgroundColor: darkCard,
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#1f1f2e',
    alignItems: 'center',
    marginBottom: 20,
  },
  quoteText: {
    fontSize: 13,
    fontWeight: 900,
    color: white,
    textAlign: 'center',
    lineHeight: 1.4,
  },
  quoteHighlight: {
    color: pink,
  },

  // Footer
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 40,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 6.5,
    color: '#4a4a5a',
  },
});

function Bullet({ text, color }: { text: string; color: string }) {
  return (
    <View style={s.bulletRow}>
      <View style={[s.bullet, { backgroundColor: color }]} />
      <Text style={s.bulletText}>{text}</Text>
    </View>
  );
}

function PageFooter({ page }: { page: string }) {
  return (
    <View style={s.footer}>
      <Text style={s.footerText}>OCTOGOAL - Dossier Partenariat 2025-2026</Text>
      <Text style={s.footerText}>{page}</Text>
    </View>
  );
}

export default function MediaKitPDF() {
  return (
    <Document>
      {/* ═══════════ PAGE 1 : COVER + STATS ═══════════ */}
      <Page size="A4" style={s.page}>
        <View style={s.headerRow}>
          <Text style={s.logo}>
            <Text style={{ color: white }}>OCTO</Text>
            <Text style={s.logoPink}>GO</Text>
            <Text style={s.logoBlue}>AL</Text>
          </Text>
          <View style={s.badge}>
            <Text style={s.badgeText}>Dossier Partenariat</Text>
          </View>
        </View>

        <View style={s.divider} />

        <Text style={s.pageTitle}>Le N°1 du foot digital en France</Text>
        <Text style={s.subtitle}>
          Quand le N°1 du foot sur internet lance son propre média, ça donne OCTOGOAL. Du spectacle. Du show. Du foot qui rassemble. Et une audience que personne d'autre ne peut vous offrir.
        </Text>

        {/* STATS */}
        <Text style={s.sectionLabel}>Résultats CAN 2025 — 3 semaines</Text>
        <View style={s.statsGrid}>
          {[
            { value: '239M', label: 'Impressions', color: pink },
            { value: '134M', label: 'Vues vidéo', color: blue },
            { value: '8M', label: 'Interactions', color: '#a855f7' },
            { value: '198K', label: 'Nouveaux abonnés', color: '#4ade80' },
            { value: '57%', label: 'Rétention moyenne', color: '#fbbf24' },
            { value: '452', label: 'Publications', color: '#22d3ee' },
          ].map((stat) => (
            <View key={stat.label} style={s.statCard}>
              <Text style={[s.statValue, { color: stat.color }]}>{stat.value}</Text>
              <Text style={s.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* AUDIENCE */}
        <Text style={s.sectionLabel}>Audience</Text>
        <View style={s.twoCol}>
          <View style={[s.card, s.col, { marginBottom: 0 }]}>
            <Text style={[s.cardTitle, { fontSize: 10, marginBottom: 10 }]}>Démographie</Text>
            <View style={s.audienceRow}>
              <Text style={s.audienceLabel}>Cible principale</Text>
              <Text style={s.audienceValue}>25-34 ans</Text>
            </View>
            <View style={s.bar}><View style={[s.barFill, { width: '45%', backgroundColor: pink }]} /></View>
            <View style={s.audienceRow}>
              <Text style={s.audienceLabel}>Hommes</Text>
              <Text style={s.audienceValue}>91%</Text>
            </View>
            <View style={s.bar}><View style={[s.barFill, { width: '91%', backgroundColor: pink }]} /></View>
          </View>
          <View style={[s.card, s.col, { marginBottom: 0 }]}>
            <Text style={[s.cardTitle, { fontSize: 10, marginBottom: 10 }]}>Géographie</Text>
            <View style={s.audienceRow}>
              <Text style={s.audienceLabel}>France</Text>
              <Text style={s.audienceValue}>50%+</Text>
            </View>
            <View style={s.bar}><View style={[s.barFill, { width: '55%', backgroundColor: blue }]} /></View>
            <View style={s.audienceRow}>
              <Text style={s.audienceLabel}>Afrique francophone</Text>
              <Text style={s.audienceValue}>30%+</Text>
            </View>
            <View style={s.bar}><View style={[s.barFill, { width: '33%', backgroundColor: blue }]} /></View>
          </View>
        </View>

        {/* QUOTE */}
        <View style={s.quoteBox}>
          <Text style={s.quoteText}>
            "C'est du spectacle. C'est du show.{'\n'}
            <Text style={s.quoteHighlight}>C'est du foot qui rassemble."</Text>
          </Text>
        </View>

        <Text style={[s.body, { textAlign: 'center' }]}>En 3 semaines de CAN. Imaginez une saison complète.</Text>

        <PageFooter page="1 / 2" />
      </Page>

      {/* ═══════════ PAGE 2 : OFFRE + CONTACT ═══════════ */}
      <Page size="A4" style={s.page}>
        <View style={s.headerRow}>
          <Text style={s.logo}>
            <Text style={{ color: white }}>OCTO</Text>
            <Text style={s.logoPink}>GO</Text>
            <Text style={s.logoBlue}>AL</Text>
          </Text>
          <View style={s.badge}>
            <Text style={s.badgeText}>Formules Partenaires</Text>
          </View>
        </View>

        <View style={s.divider} />

        {/* INTÉGRATION */}
        <Text style={s.sectionLabel}>Votre marque au cœur du show</Text>
        <Text style={[s.subtitle, { marginBottom: 12 }]}>
          3 leviers d'intégration concrets pour une visibilité maximale.
        </Text>

        <View style={{ flexDirection: 'row', gap: 8, marginBottom: 20 }}>
          {[
            { title: 'Présence visuelle', desc: 'Logo en rotation, habillage graphique brandé, intégration dans les génériques et transitions.', color: pink },
            { title: 'Mentions par Momo', desc: 'Momo cite votre marque en ouverture et clôture. "Cette émission est présentée par [MARQUE]"', color: blue },
            { title: 'Séquences sponsorisées', desc: 'Des moments dédiés dans le show. "La Compo du Match by [MARQUE]"', color: '#a855f7' },
          ].map((item) => (
            <View key={item.title} style={[s.card, { flex: 1, marginBottom: 0 }]}>
              <View style={{ width: 20, height: 3, borderRadius: 2, backgroundColor: item.color, marginBottom: 8 }} />
              <Text style={[s.cardTitle, { fontSize: 9, marginBottom: 4 }]}>{item.title}</Text>
              <Text style={s.cardBody}>{item.desc}</Text>
            </View>
          ))}
        </View>

        {/* 3 FORMULES */}
        <Text style={s.sectionLabel}>Nos formules</Text>
        <View style={{ flexDirection: 'row', gap: 8, marginBottom: 20 }}>
          {/* Sponsor Principal */}
          <View style={[s.card, { flex: 1, marginBottom: 0, borderColor: '#3d1a2e' }]}>
            <Text style={[s.cardTitle, { color: pink }]}>Sponsor Principal</Text>
            <Text style={[s.cardSubtitle, { color: pink }]}>Exclusif annuel</Text>
            <Text style={s.cardBody}>Le partenaire fil rouge sur l'ensemble du dispositif OCTOGOAL.</Text>
            <Bullet text="Mention dans toutes les vidéos" color={pink} />
            <Bullet text="Présence dans tous les lives" color={pink} />
            <Bullet text="Intégration dans les génériques" color={pink} />
            <Bullet text="Format exclusif co-créé avec Momo" color={pink} />
            <View style={s.tagRow}>
              <Text style={[s.tag, { color: pink }]}>1 marque max</Text>
            </View>
          </View>

          {/* Sponsor Premium */}
          <View style={[s.card, { flex: 1, marginBottom: 0, borderColor: '#1a2a3e' }]}>
            <Text style={[s.cardTitle, { color: blue }]}>Sponsor Premium</Text>
            <Text style={[s.cardSubtitle, { color: blue }]}>1 live/mois + contenu co-créé</Text>
            <Text style={s.cardBody}>Large visibilité et intégration éditoriale régulière.</Text>
            <Bullet text="Mention vidéos longues" color={blue} />
            <Bullet text="1 live / mois sponsorisé" color={blue} />
            <Bullet text="1 format vidéo co-créé / mois" color={blue} />
            <Bullet text="Présence sur le site OCTOGOAL" color={blue} />
            <View style={s.tagRow}>
              <Text style={[s.tag, { color: blue }]}>2 à 4 marques max</Text>
            </View>
          </View>

          {/* Activation Digitale */}
          <View style={[s.card, { flex: 1, marginBottom: 0, borderColor: '#2a1a3e' }]}>
            <Text style={[s.cardTitle, { color: '#a855f7' }]}>Activation Digitale</Text>
            <Text style={[s.cardSubtitle, { color: '#a855f7' }]}>Formats viraux</Text>
            <Text style={s.cardBody}>Formats courts viraux sur TikTok, Reels & Shorts.</Text>
            <Bullet text="2 vidéos courtes / semaine" color="#a855f7" />
            <Bullet text="Cross-plateforme (6 réseaux)" color="#a855f7" />
            <Bullet text="Co-branding visuel" color="#a855f7" />
            <Bullet text="Sponsoring de rubriques" color="#a855f7" />
            <View style={s.tagRow}>
              <Text style={[s.tag, { color: '#a855f7' }]}>Rotation rapide</Text>
            </View>
          </View>
        </View>

        {/* VISION */}
        <Text style={s.sectionLabel}>Et maintenant ?</Text>
        <View style={{ flexDirection: 'row', gap: 8, marginBottom: 20 }}>
          {[
            { title: 'Ligue des Champions', value: '5-7', unit: 'émissions', desc: 'Couverture des grands matchs avant la CDM' },
            { title: 'Coupe du Monde 2026', value: '30+', unit: 'émissions', desc: 'Mode quotidien pendant toute la compétition' },
            { title: 'Volume projeté', value: '×10', unit: 'vs CAN 2025', desc: '40+ émissions prévues sur la saison' },
          ].map((item) => (
            <View key={item.title} style={[s.card, { flex: 1, marginBottom: 0, alignItems: 'center' }]}>
              <Text style={[s.statValue, { fontSize: 20, color: pink }]}>{item.value}</Text>
              <Text style={[s.statLabel, { marginBottom: 4 }]}>{item.unit}</Text>
              <Text style={[s.cardTitle, { fontSize: 9, textAlign: 'center', marginBottom: 2 }]}>{item.title}</Text>
              <Text style={[s.cardBody, { textAlign: 'center', fontSize: 7 }]}>{item.desc}</Text>
            </View>
          ))}
        </View>

        {/* CONTACT */}
        <View style={s.contactBox}>
          <Text style={[s.sectionTitle, { marginBottom: 4, textAlign: 'center' }]}>Faites partie de l'aventure</Text>
          <Text style={s.contactEmail}>contact@octogoal.com</Text>
          <Text style={s.contactSub}>
            Réponse sous 24h · Dossier partenariat complet sur demande{'\n'}
            Places limitées pour la Coupe du Monde 2026
          </Text>
        </View>

        <PageFooter page="2 / 2" />
      </Page>
    </Document>
  );
}
