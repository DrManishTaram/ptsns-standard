import React from 'react';
import GenericPage from './GenericPage';

const UniversityOverview: React.FC = () => {
    return (
        <GenericPage title="University Overview" category="The University">
            <div className="space-y-6 text-gray-700 leading-relaxed font-sans">
                
                {/* Header Section with Quotes */}
                <div className="text-center mb-8 bg-turmeric-50 p-6 rounded-xl border border-turmeric-100">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-earth-900 mb-2">Pandit Shambhu Nath Shukla Vishwavidyalaya, Shahdol (M.P.)</h2>
                    <h3 className="text-lg font-serif font-bold text-earth-700 mb-4">विश्वविद्यालय का परिचय</h3>
                    
                    <div className="space-y-2 italic text-turmeric-800 font-medium">
                        <p>“पंडित शंभूनाथ शुक्ला विश्वविद्यालय -- शिक्षा, शोध और समर्पण का प्रतीक”</p>
                        <p>“वैश्विक क्षमता से संपन्न, स्थानीय सरोकारों से जुड़ा शिक्षण संस्थान”</p>
                    </div>
                </div>

                {/* Introduction Section */}
                <div>
                    <h3 className="text-xl font-bold text-earth-900 mb-3 border-b-2 border-turmeric-500 inline-block pb-1">Pandit Shambhu Nath Shukla Vishwavidyalaya: परिचय</h3>
                    <p className="textAlign-justify">
                        पंडित शंभूनाथ शुक्ला विश्वविद्यालय, जोकि शहडोल संभाग ही नहीं, बल्कि सम्पूर्ण मध्यप्रदेश का एकमात्र विश्वविद्यालय है, जिसकी स्थापना विख्यात स्वतंत्रता संग्राम सेनानी एवं पूर्व विंध्य प्रदेश के मुख्यमंत्री पंडित शंभूनाथ शुक्ल जी के नाम पर की गई है। यह विश्वविद्यालय "राष्ट्रीय उच्चतर शिक्षा अभियान" (RUSA) के अंतर्गत मध्यप्रदेश शासन द्वारा महाविद्यालय के उन्नयन के पश्चात विश्वविद्यालय के रूप में प्रतिष्ठापित किया गया।
                    </p>
                    <p className="mt-4 textAlign-justify">
                        पूर्व में महाविद्यालय के रूप में कार्यरत इस संस्थान को राष्ट्रीय मूल्यांकन एवं प्रत्यायन परिषद (NAAC), बैंगलोर द्वारा "ए" ग्रेड प्रदान किया गया था तथा विश्वविद्यालय अनुदान आयोग (UGC) द्वारा Potential for Excellence का दर्जा प्राप्त हुआ था। अधिनियम दिनांक 16 सितंबर 2016 को मध्यप्रदेश के असाधारण राजपत्र में प्रकाशित किया गया, और इसकी विधिवत स्थापना 1 जून 2017 को संपन्न हुई। विश्वविद्यालय के प्रथम कुलगुरु के रूप में प्रोफेसर मुकेश कुमार तिवारी ने 12 अगस्त 2017 को पदभार ग्रहण किया। द्वितीय कुलगुरु के रूप में प्रो. रामशंकर ने 12 अगस्त 2022 को पदभार ग्रहण किया।
                    </p>
                    <p className="mt-4 textAlign-justify">
                        यह विश्वविद्यालय उच्च गुणवत्ता युक्त शिक्षा, शोध एवं रोजगारोन्मुखी पाठ्यक्रमों के माध्यम से विद्यार्थियों में वैश्विक क्षमता विकसित करने हेतु समर्पित है। संस्थान का उद्देश्य स्नातक, स्नातकोत्तर, पीएच.डी., सर्टिफिकेट एवं डिप्लोमा कार्यक्रमों के माध्यम से राष्ट्र की मूलभूत समस्याओं के समाधान में सहायक, सामाजिक सरोकारों से सम्बद्ध तथा व्यावहारिक ज्ञान पर आधारित पाठ्यक्रम प्रदान करना है।
                    </p>
                </div>

                {/* Academic Structure Section */}
                <div className="mt-8">
                    <h3 className="text-xl font-bold text-earth-900 mb-3 border-b-2 border-turmeric-500 inline-block pb-1">शैक्षणिक संरचना एवं विशेषताएँ</h3>
                    <p className="textAlign-justify">
                        कला, वाणिज्य एवं विज्ञान संकायों के अंतर्गत विश्वविद्यालय में समस्त विषयों का अध्ययन एवं शोध हेतु आवश्यक संसाधन उपलब्ध हैं। विश्वविद्यालय में संगीत, भौतिकी, रसायन शास्त्र, प्राणीशास्त्र, कृषि, मतस्य विज्ञान मास्टर ऑफ सोशल वर्क (MSW) एवं MBA जैसे नवप्रारंभित पाठ्यक्रम भी सम्मिलित किए गए हैं। विश्वविद्यालय समयबद्ध परीक्षाओं एवं परिणामों की घोषणा के लिए राज्यभर में प्रसिद्ध है।
                    </p>
                </div>

                {/* Infrastructure Section */}
                <div className="mt-8">
                    <h3 className="text-xl font-bold text-earth-900 mb-3 border-b-2 border-turmeric-500 inline-block pb-1">अधोसंरचना एवं परिसर</h3>
                    <p className="textAlign-justify">
                        शहडोल परिसर 26 एकड़ भूमि पर स्थित है, जहाँ पर कला, वाणिज्य एवं खेल संकाय की कक्षाएँ संचालित की जाती हैं। नवीन परिसर ग्राम नवलपुर (सरफा नदी के तट पर) में 44 एकड़ में विकसित किया गया है, जिसमें प्रशासनिक भवन, अकादमिक ब्लॉक, पुस्तकालय, अध्ययन केंद्र, छात्रावास, कैंटीन आदि पूर्ण रूप से कार्यशील हैं। यहाँ पर बीएससी, एमएससी एवं MBA की कक्षाएँ संचालित हो रही हैं। इसके अतिरिक्त, नवलपुर में 50 एकड़ अतिरिक्त भूमि विश्वविद्यालय को आवंटित की गई है।
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mt-6">
                        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-earth-800 text-lg mb-2">शहडोल परिसर</h4>
                            <p className="text-sm text-gray-600">26 एकड़ भूमि पर स्थित, कला, वाणिज्य एवं खेल संकाय की कक्षाएँ</p>
                        </div>
                        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-earth-800 text-lg mb-2">नवलपुर परिसर</h4>
                            <p className="text-sm text-gray-600">44 एकड़ में विकसित, विज्ञान एवं प्रबंधन अध्ययन</p>
                        </div>
                        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-earth-800 text-lg mb-2">विस्तार योजना</h4>
                            <p className="text-sm text-gray-600">नवलपुर में 50 एकड़ अतिरिक्त भूमि भविष्य के विकास हेतु</p>
                        </div>
                    </div>
                </div>

                {/* Research & Facilities Section */}
                <div className="mt-8">
                    <h3 className="text-xl font-bold text-earth-900 mb-3 border-b-2 border-turmeric-500 inline-block pb-1">शोध एवं अध्ययन सुविधाएँ</h3>
                    <p className="textAlign-justify mb-4">
                        विश्वविद्यालय में स्नातकोत्तर स्तर पर 108 विषयों तथा पीएच.डी. हेतु 18 विषयों में अध्ययन एवं शोध की सुविधाएँ उपलब्ध हैं। सुदृढ़ प्रयोगशालाएँ, समृद्ध पुस्तकालय, एवं विस्तृत खेल सुविधाएँ इसकी प्रमुख विशेषताएँ हैं।
                    </p>
                    
                    <div className="bg-turmeric-50 rounded-xl p-6">
                        <h4 className="font-bold text-earth-900 mb-4">प्रमुख सुविधाएँ एवं पाठ्यक्रम</h4>
                        <ul className="grid md:grid-cols-2 gap-3 list-disc list-inside text-earth-800">
                            <li>स्नातकोत्तर स्तर पर 108 विषय</li>
                            <li>पीएच.डी. हेतु 18 विषय</li>
                            <li>विविध सर्टिफिकेट एवं डिप्लोमा कोर्स</li>
                            <li>आधुनिक प्रयोगशालाएँ</li>
                            <li>समृद्ध पुस्तकालय</li>
                            <li>विस्तृत खेल सुविधाएँ</li>
                        </ul>
                    </div>
                </div>

                {/* Future Plans Section */}
                <div className="mt-8">
                    <h3 className="text-xl font-bold text-earth-900 mb-3 border-b-2 border-turmeric-500 inline-block pb-1">भविष्य की योजनाएँ</h3>
                    <p className="textAlign-justify">
                        विश्वविद्यालय की योजना है कि देश के अन्य प्रमुख शैक्षणिक संस्थानों से समन्वय स्थापित कर रोजगारोन्मुखी सर्टिफिकेट कोर्स प्रारम्भ किए जाएँ, जिससे विद्यार्थी अध्ययन के साथ-साथ व्यावसायिक दक्षता भी अर्जित कर सकें।
                    </p>
                </div>

            </div>
        </GenericPage>
    );
};

export default UniversityOverview;
