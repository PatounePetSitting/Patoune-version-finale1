import { useState, FormEvent } from 'react';
import { BlogPost } from '../types';
import { BookOpen, Tag, Calendar, Clock, Eye, Send, Sparkles, CheckCircle } from 'lucide-react';

interface BlogSectionProps {
  posts: BlogPost[];
  onAddPost: (newPost: BlogPost) => void;
  language: 'fr' | 'en';
  translations: any;
}

export default function BlogSection({ posts, onAddPost, language, translations }: BlogSectionProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isCreatingDraft, setIsCreatingDraft] = useState(false);
  
  // Local form state for draft creation
  const [draftTitle, setDraftTitle] = useState("");
  const [draftContent, setDraftContent] = useState("");
  const [draftKeywords, setDraftKeywords] = useState("");
  const [draftCategory, setDraftCategory] = useState("Local SEO");
  const [draftSuccess, setDraftSuccess] = useState(false);

  // SEO Analyzer logic
  const analyzeSeoScore = (titleStr: string, contentStr: string, keywordsStr: string) => {
    let score = 20; // Base score
    const textToSearch = (titleStr + " " + contentStr + " " + keywordsStr).toLowerCase();
    
    // Check local French Riviera keywords
    if (textToSearch.includes("pet sitting") || textToSearch.includes("pet sitter")) score += 20;
    if (textToSearch.includes("monaco") || textToSearch.includes("monte-carlo")) score += 15;
    if (textToSearch.includes("cannes")) score += 15;
    if (textToSearch.includes("nice")) score += 15;
    if (textToSearch.includes("garde de chien") || textToSearch.includes("garde de chat")) score += 15;

    return Math.min(score, 100);
  };

  const seoScore = analyzeSeoScore(draftTitle, draftContent, draftKeywords);

  const handleCreateDraft = (e: FormEvent) => {
    e.preventDefault();
    if (!draftTitle || !draftContent) return;

    const keywordsArray = draftKeywords
      .split(",")
      .map(k => k.trim())
      .filter(k => k.length > 0);

    const newPost: BlogPost = {
      id: String(Date.now()),
      slug: draftTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      title: {
        fr: language === 'fr' ? draftTitle : `[FR Draft] ${draftTitle}`,
        en: language === 'en' ? draftTitle : `[EN Draft] ${draftTitle}`
      },
      excerpt: {
        fr: draftContent.slice(0, 140) + "...",
        en: draftContent.slice(0, 140) + "..."
      },
      content: {
        fr: draftContent,
        en: draftContent
      },
      keywords: keywordsArray.length > 0 ? keywordsArray : ["pet sitting", "cote d'azur"],
      date: new Date().toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' }),
      readTime: "3 mins",
      category: {
        fr: draftCategory,
        en: draftCategory
      },
      image: "/src/assets/images/dog_sitting_1779628649488.png"
    };

    onAddPost(newPost);
    setDraftSuccess(true);
    
    // Reset form
    setTimeout(() => {
      setDraftTitle("");
      setDraftContent("");
      setDraftKeywords("");
      setIsCreatingDraft(false);
      setDraftSuccess(false);
    }, 2000);
  };

  return (
    <div id="seo-blog" className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-stone-850 tracking-tight flex items-center gap-3">
            <span className="p-2 bg-riviera-light rounded-xl text-riviera-azure inline-block border border-riviera-azure/15">
              <Sparkles className="h-6 w-6" />
            </span>
            <span>{translations[language].blogTitle}</span>
          </h2>
          <p className="mt-2 text-stone-600 max-w-2xl">{translations[language].blogSubtitle}</p>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group bg-white rounded-2xl border border-stone-150 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
          >
            {/* Pure-CSS Stylized banner instead of an image to prevent lag */}
            <div className="relative aspect-[4/3] bg-gradient-to-tr from-amber-500/10 to-riviera-azure/10 flex items-center justify-center border-b border-stone-100/50">
              <BookOpen className="h-16 w-16 text-riviera-azure/45 group-hover:scale-110 group-hover:text-riviera-azure/65 transition-all duration-500" />
              <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors duration-300"></div>
              <span className="absolute top-3 left-3 bg-white/95 text-riviera-azure px-3 py-1 text-xs font-bold rounded-full border border-riviera-light backdrop-blur shadow-sm">
                {post.category[language]}
              </span>
            </div>

            {/* Content info */}
            <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-4 text-xs font-mono text-stone-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-extrabold text-charcoal-luxe group-hover:text-riviera-azure transition-colors line-clamp-2 leading-snug">
                  {post.title[language]}
                </h3>

                <p className="text-sm text-stone-600 line-clamp-3 leading-relaxed">
                  {post.excerpt[language]}
                </p>
              </div>

              {/* Thématiques */}
              <div className="space-y-4 pt-3 border-t border-stone-100">
                <div className="flex flex-wrap gap-1">
                  {post.keywords.slice(0, 3).map((kw, i) => (
                    <span key={i} className="inline-flex items-center gap-0.5 text-[10px] font-mono font-medium bg-stone-100 text-stone-600 px-2 py-0.5 rounded border border-stone-200">
                      <Tag className="h-2.5 w-2.5 text-stone-400" />
                      {kw}
                    </span>
                  ))}
                  {post.keywords.length > 3 && (
                    <span className="text-[10px] text-stone-400 self-center">+{post.keywords.length - 3}</span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedPost(post)}
                  className="w-full py-2.5 border border-riviera-azure/20 hover:border-riviera-azure text-riviera-azure hover:bg-riviera-light rounded-xl transition-all font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  {translations[language].readMore}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Reader Modal popup */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-stone-200 shadow-2xl animate-in fade-in zoom-in duration-200">
            {/* Pure-CSS Stylized banner instead of an image to prevent lag */}
            <div className="relative h-60 bg-gradient-to-tr from-amber-500/10 to-riviera-azure/20 flex items-center justify-center border-b border-stone-200">
              <BookOpen className="h-16 w-16 text-riviera-azure/40 animate-pulse" />
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 h-9 w-9 bg-stone-900/80 hover:bg-stone-900 text-white rounded-full flex items-center justify-center transition-colors focus:outline-none z-10"
              >
                ✕
              </button>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-900/90 via-stone-900/50 to-transparent p-6 text-white pt-24">
                <span className="bg-riviera-azure text-white px-2.5 py-0.5 text-xs font-bold rounded-lg uppercase tracking-wider">
                  {selectedPost.category[language]}
                </span>
                <h3 className="text-xl md:text-2xl font-serif font-bold mt-2 line-clamp-2 leading-snug">
                  {selectedPost.title[language]}
                </h3>
              </div>
            </div>

            {/* Read Content area */}
            <div className="p-6 md:p-8 space-y-6">
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-stone-500 border-b border-stone-100 pb-4">
                <span className="flex items-center gap-1 bg-stone-50 px-2 py-1 rounded border border-stone-100">
                  <Calendar className="h-3.5 w-3.5 text-riviera-azure" />
                  {selectedPost.date}
                </span>
                <span className="flex items-center gap-1 bg-stone-50 px-2 py-1 rounded border border-stone-100">
                  <Clock className="h-3.5 w-3.5 text-riviera-azure" />
                  {selectedPost.readTime}
                </span>
                <span className="flex items-center gap-1 bg-emerald-50 text-emerald-800 px-2 py-1 rounded border border-emerald-100">
                  <Eye className="h-3.5 w-3.5" />
                  {language === 'fr' ? "Publié" : "Published"}
                </span>
              </div>

              {/* Text Body */}
              <div className="prose prose-stone max-w-none text-stone-700 text-sm md:text-base leading-relaxed space-y-4 whitespace-pre-line font-sans">
                {selectedPost.content[language]}
              </div>

              {/* Thématiques */}
              <div className="pt-6 border-t border-stone-100 space-y-2">
                <span className="text-xs font-mono font-bold text-stone-500 uppercase flex items-center gap-1">
                  <Tag className="h-3.5 w-3.5 text-stone-400" />
                  {language === 'fr' ? "Thématiques de l'article :" : "Article tags:"}
                </span>
                <div className="flex flex-wrap gap-2 pt-1 font-mono">
                  {selectedPost.keywords.map((kw, idx) => (
                    <span
                      key={idx}
                      className="bg-riviera-light text-riviera-azure px-2.5 py-1 text-xs font-medium rounded border border-riviera-azure/10"
                    >
                      #{kw}
                    </span>
                  ))}
				</div>
              </div>

              {/* Action buttons */}
              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-2.5 bg-riviera-azure hover:bg-riviera-deep text-white font-bold rounded-xl transition-all text-sm shadow cursor-pointer"
                >
                  {translations[language].backToBlog}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
