import { useState, createElement } from 'react';
import { Mail, ArrowRight, Zap, Target, Download, FileText, Loader2 } from 'lucide-react';

export default function ContactSection() {
  const [generating, setGenerating] = useState(false);

  const handleDownloadPDF = async () => {
    setGenerating(true);
    try {
      const [{ pdf }, { default: PDFDoc }] = await Promise.all([
        import('@react-pdf/renderer'),
        import('../pdf/MediaKitPDF'),
      ]);
      const blob = await pdf(createElement(PDFDoc)).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'OCTOGOAL-Dossier-Partenariat-2025.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('PDF generation failed:', err);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 px-6 sm:px-8 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-pink-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <p className="text-xs font-bold tracking-widest uppercase text-pink-400 mb-6">Contact</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
          Faites partie de l'aventure
        </h2>
        <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto mb-12">
          Agence, annonceur, marque — discutons de votre projet et explorons comment OCTOGOAL peut amplifier votre visibilité.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="mailto:contact@octogoal.com"
            className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-400 hover:to-blue-400 text-black font-bold text-base rounded-xl transition-all duration-200"
          >
            <Mail className="w-5 h-5" />
            contact@octogoal.com
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <button
            onClick={handleDownloadPDF}
            disabled={generating}
            className="group inline-flex items-center gap-3 px-6 py-4 sm:py-5 bg-white/[0.04] backdrop-blur-md border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] text-white font-semibold text-sm rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-wait"
          >
            {generating ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Download className="w-4 h-4" />
            )}
            {generating ? 'Génération...' : 'Télécharger le dossier PDF'}
          </button>
        </div>

        <p className="text-sm text-pink-400/80 font-semibold mb-6">
          Places limitées pour la Coupe du Monde 2026
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-pink-500/50" />
            Réponse sous 24h
          </div>
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-pink-500/50" />
            Dossier partenariat complet
          </div>
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-pink-500/50" />
            Dispositif sur-mesure
          </div>
        </div>
      </div>
    </section>
  );
}
