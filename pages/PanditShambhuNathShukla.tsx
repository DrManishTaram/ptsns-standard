import React from 'react';
import GenericPage from './GenericPage';

const PanditShambhuNathShukla: React.FC = () => {
    return (
        <GenericPage title="युगदृष्टा पंडित शंभूनाथ शुक्ल" category="The University">
            <div className="space-y-8 text-gray-700 leading-relaxed font-sans">
                
                {/* Header Section */}
                <div className="text-center mb-10 bg-turmeric-50 p-8 rounded-2xl border border-turmeric-100">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-earth-900 mb-2">Pandit Shambhu Nath Shukla Vishwavidyalaya, Shahdol (M.P.)</h2>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-earth-700 mt-4">युगदृष्टा पंडित शंभूनाथ शुक्ल : जननायक से प्रेरणानायक तक</h3>
                </div>

                {/* Profile Section */}
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Image Placeholder */}
                    <div className="w-full md:w-1/3 flex flex-col items-center">
                        <div className="w-64 h-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg border-4 border-white mb-4 relative group">
                            {/* Placeholder for actual image */}
                            <img 
                                src="/shukla-ji.jpg" 
                                alt="Pandit Shambhu Nath Shukla" 
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Pandit+Shambhu+Nath&background=random&size=400';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                                <span className="text-white font-bold">18 दिसंबर 1903 - 1978</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <h4 className="text-xl font-bold text-earth-900">पंडित शंभूनाथ शुक्ल</h4>
                            <p className="text-turmeric-600 font-bold">18 दिसंबर 1903 - 1978</p>
                        </div>
                    </div>

                    {/* Intro Text */}
                    <div className="w-full md:w-2/3">
                        <p className="text-lg text-justify leading-loose first-letter:text-5xl first-letter:font-bold first-letter:text-turmeric-600 first-letter:mr-3 first-letter:float-left">
                            भारत के स्वाधीनता संग्राम की पावन भूमि और मध्यप्रदेश की राजनैतिक चेतना को जीवन्त बनाए रखने वाले महान स्वतंत्रता सेनानी, प्रखर विचारक, युगदृष्टा और शिक्षाविद् <strong>पंडित शंभूनाथ शुक्ल जी</strong> का जन्म 18 दिसंबर 1903 को तत्कालीन रीवा राज्य के देवहरा नगर (वर्तमान में शहडोल ज़िले में स्थित) में हुआ। उनके पिताश्री पं. शंकरलाल शुक्ल एक प्रतिष्ठित किसान एवं सामाजिक चेतना से युक्त व्यक्ति थे, जिनसे शंभूनाथ जी को सादगी, कर्मठता और देशभक्ति के अमूल्य संस्कार मिले।
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mt-8">
                    
                    {/* Education */}
                    <div>
                        <h3 className="text-xl font-bold text-earth-900 mb-3 border-b-2 border-turmeric-500 inline-block pb-1">शिक्षा और राष्ट्रसेवा की ओर अग्रसरता</h3>
                        <p className="text-justify">
                            शंभूनाथ शुक्ल जी ने प्रारंभिक शिक्षा रीवा से प्राप्त की, फिर मिंटो इंटर कॉलेज दिल्ली और इलाहाबाद विश्वविद्यालय से उच्च शिक्षा प्राप्त की। शिक्षा के दौरान ही वे राष्ट्रवादी आंदोलनों से प्रभावित हुए और युवावस्था में ही राजनीति को जनसेवा का माध्यम बनाते हुए स्वतंत्रता संग्राम में सक्रिय भागीदारी निभाई।
                        </p>
                    </div>

                    {/* Leadership */}
                    <div>
                        <h3 className="text-xl font-bold text-earth-900 mb-3 border-b-2 border-turmeric-500 inline-block pb-1">संघर्षशील नेतृत्व का प्रतीक</h3>
                        <p className="text-justify">
                            1928 से 1947 तक का कालखंड उनके संघर्षशील जीवन का स्वर्णिम अध्याय है। असहयोग आंदोलन, सविनय अवज्ञा आंदोलन, भारत छोड़ो आंदोलन जैसे राष्ट्रव्यापी आंदोलनों में उन्होंने अग्रणी भूमिका निभाई। 1929 के इलाहाबाद कांग्रेस अधिवेशन में भागीदारी और 1942 में 'भारत छोड़ो आंदोलन' के दौरान जेल यात्रा ने उनके जीवन को संघर्षों की आंच में तपाकर और भी दृढ़ बनाया।
                        </p>
                    </div>

                    {/* Nation Building */}
                    <div>
                        <h3 className="text-xl font-bold text-earth-900 mb-3 border-b-2 border-turmeric-500 inline-block pb-1">राष्ट्रनिर्माण में सक्रिय भूमिका</h3>
                        <p className="text-justify">
                            1946 में प्रांतीय विधानसभा के सदस्य निर्वाचित होकर उन्होंने स्वतंत्र भारत के प्रशासनिक ढांचे को गढ़ने में महत्वपूर्ण योगदान दिया। उनकी दूरदर्शिता में गांव, किसान, शिक्षा और समाज की समग्र उन्नति सदैव केंद्र में रही। वे सत्ता को सेवा का माध्यम मानते थे, न कि वैभव का साधन।
                        </p>
                    </div>

                    {/* Governance */}
                    <div>
                        <h3 className="text-xl font-bold text-earth-900 mb-3 border-b-2 border-turmeric-500 inline-block pb-1">संवेदनशील शासन और नीतिपरक निर्णय</h3>
                        <p className="text-justify">
                            1952-1956 तक विन्ध्य प्रदेश के मुख्यमंत्री पद पर आसीन रहे। मध्यप्रदेश के पुनर्गठन के बाद उन्हें राज्य मंत्रिमंडल में स्थान मिला। उनके शासनकाल में आदिवासी क्षेत्रों का विशेष विकास हुआ, शिक्षा को सुलभ बनाने के लिए कई संस्थानों की स्थापना की गई, और प्रशासन में पारदर्शिता व नैतिकता को प्राथमिकता दी गई। वे नीति को केवल प्रशासनिक भाषा में नहीं, बल्कि जनभाषा में साकार करते थे।
                        </p>
                    </div>
                </div>

                {/* Legacy Section - Full Width */}
                <div className="bg-stone-100 p-8 rounded-2xl mt-8">
                    <h3 className="text-2xl font-bold text-earth-900 mb-4 text-center">शिक्षा के प्रति समर्पण और अमिट छवि</h3>
                    <div className="space-y-6">
                        <p className="text-justify">
                            <strong>पं. शंभूनाथ शुक्ल जी</strong> शिक्षा को केवल औपचारिक ज्ञान नहीं, बल्कि चरित्र निर्माण का आधार मानते थे। उन्होंने शहडोल जैसे पिछड़े क्षेत्र में विद्यालयों, महाविद्यालयों और उच्च शिक्षा संस्थानों की नींव रखी, जिससे स्थानीय युवाओं को बेहतर भविष्य की दिशा मिली। वे शासकीय महाविद्यालय, शहडोल के संरक्षक रहे और उसी परिसर में उनकी प्रतिमा आज भी विद्यार्थियों को प्रेरणा देती है।
                        </p>
                        <p className="text-justify">
                            वे न केवल राजनेता थे, बल्कि एक श्रेष्ठ साहित्यकार, पत्रकार, संपादक और शिक्षाशास्त्री भी थे। उनकी लेखनी में समाज के प्रति जागरूकता और राष्ट्र के प्रति समर्पण झलकता है। वे कभी लोकप्रियता के पीछे नहीं भागे; उन्होंने नीति को लोकहित से जोड़ा और समाज को शिक्षित, संगठित एवं जागरूक करने में आजीवन लगे रहे।
                        </p>
                    </div>
                </div>

                {/* Conclusion */}
                <div className="border-l-4 border-turmeric-500 pl-6 py-2 my-8">
                    <h3 className="text-xl font-bold text-earth-900 mb-2">प्रेरणा का वर्तमान</h3>
                    <p className="italic text-gray-600 mb-4">
                        "पंडित शंभूनाथ शुक्ल जी का जीवन इस बात का प्रमाण है कि नेतृत्व वह नहीं जो सबसे आगे चलकर मार्ग दिखाए, बल्कि वह है जो सबसे पीछे चलकर सबको आगे बढ़ने का संबल दे। वे इतिहास नहीं, प्रेरणा का वर्तमान हैं - एक ऐसे जननायक जिन्होंने शहडोल को केवल एक भौगोलिक पहचान नहीं, बल्कि एक वैचारिक शक्ति बना दिया।"
                    </p>
                    <p className="font-bold text-earth-800">
                        नमन उस युगपुरुष को, जिन्होंने सेवा को ही सच्ची सत्ता माना।
                    </p>
                </div>
                
                {/* Legacy Note */}
                <div className="text-center text-sm text-gray-500 mt-12 pt-8 border-t border-gray-200">
                    <p>1978 में उनके निधन के बाद भी वे अपने विचारों, मूल्यों और आदर्शों के माध्यम से जीवित हैं। पंडित शंभूनाथ शुक्ला विश्वविद्यालय, शहडोल उनके उसी वैचारिक दृष्टिकोण की सजीव अभिव्यक्ति है।</p>
                </div>

            </div>
        </GenericPage>
    );
};

export default PanditShambhuNathShukla;
