import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Publication2.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Publication2 = () => {
  const container = useRef(null);
  const [activePublication, setActivePublication] = useState("brecht");

  useGSAP(() => {
    const timeline = gsap.timeline({
      delay: 0.3,
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
      },
    });

    timeline
      .from(".publication-header", { y: -50, opacity: 0, duration: 0.8 })
      .from(".author-info", { y: 30, opacity: 0, duration: 0.6 }, "-=0.4")
      .from(".content-section", { y: 50, opacity: 0, stagger: 0.2, duration: 0.7 }, "-=0.3");
  }, { scope: container });

  const renderBrechtPublication = () => (
    <>
      {/* Header */}
      <div className="publication-header">
        <div className="title-container">
          <div className="title-decoration"></div>
          <h1 className="publication-title">
            Dramaturgy and Brecht's Political Theory in 
            <span className="title-emphasis">Die Mutter: The Mother</span>
          </h1>
          <div className="title-decoration reverse"></div>
        </div>
        <div className="publication-divider"></div>
      </div>

      {/* Author Info */}
      <div className="author-info">
        <div className="author-avatar">
          <div className="avatar-icon">👩‍🎓</div>
        </div>
        <h2 className="author-name">Lect. Shaima Nima Mohammad</h2>
        <div className="author-affiliation">
          <div className="affiliation-item">
            <span className="affiliation-icon">🏛️</span>
            <span>Tourist Sciences Faculty</span>
          </div>
          <div className="affiliation-item">
            <span className="affiliation-icon">🎓</span>
            <span>Department of Hotel Management</span>
          </div>
          <div className="affiliation-item">
            <span className="affiliation-icon">📚</span>
            <span>University of Karbala</span>
          </div>
        </div>
      </div>

      {/* Abstract Section */}
      <div className="content-section abstract-section">
        <div className="section-header">
          <div className="section-icon">📋</div>
          <h2 className="section-title">Abstract</h2>
          <div className="section-divider"></div>
        </div>
        <div className="content-text">
          <p>
            The current study deals with dramaturgy in Bertolt Brecht's political play Die Mutter The Mother as it shows his political theory which is clearly reflected throughout the whole play. The introduction prepares the study to the meaning of dramaturgy and the discussion of its strategies as well. It also discusses its relation to performance theory. The use of dramaturgy in political theatre and its effect come next to show how the dramaturgical structure can theoretically and practically be applied to political drama including serious drama and tragedy.
          </p>
          <p>
            Then, the study tackles the dramaturgy of Brecht's Die Mutter The Mother. The analysis of the play joins three levels: structure, narrative, and reason and emotion. Finally, the research paper ends with the conclusion which sums up the results as far as the subject is concerned.
          </p>
        </div>
      </div>

      {/* Keywords Section */}
      <div className="content-section keywords-section">
        <div className="section-header">
          <div className="section-icon">🏷️</div>
          <h2 className="section-title">Keywords</h2>
          <div className="section-divider"></div>
        </div>
        <div className="keywords-list">
          <span className="keyword">
            <span className="keyword-icon">🎭</span>
            dramaturgy
          </span>
          <span className="keyword">
            <span className="keyword-icon">🌟</span>
            performance
          </span>
          <span className="keyword">
            <span className="keyword-icon">🏛️</span>
            political theatre
          </span>
          <span className="keyword">
            <span className="keyword-icon">🏗️</span>
            structure
          </span>
          <span className="keyword">
            <span className="keyword-icon">📖</span>
            narrative
          </span>
          <span className="keyword">
            <span className="keyword-icon">🧠</span>
            reason
          </span>
          <span className="keyword">
            <span className="keyword-icon">💖</span>
            emotion
          </span>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="content-section introduction-section">
        <div className="section-header">
          <div className="section-icon">📖</div>
          <h2 className="section-title">Introduction</h2>
          <div className="section-divider"></div>
        </div>
        <div className="content-text">
          <p>
            It is clear that the titles of 'playwright ' and 'drama' take their root from the two words 'play' and 'drama' . Theatre is derived from the Greek word theatron or 'place for viewing' . This root meaning of the word theatre does not seem problematic at all. A clear adoption for the word 'theatre' appears as it is used by English language in order to give the meaning of 'audience view' while the performers perform their roles. The analysis or interpretation of a play text is also an activity that is occupied not with seeing performances only , but with seeing words on page as well. Reading , rather than seeing and experiencing a multidimensional form of communication becomes the dominant mode of reception . The most important challenge is the text which is isolated from performance. The job of the director , dramaturg , performer and so on is to interpret it from a practical point of view and to creatively enquire how the play text will be realised on a multitude of practical levels. The analysis of text away from performance probably should be limited and to take a broad view of the task . The view states that "one can argue that all dramatic works are , in some senses , open compositions".<sup>1</sup> If a performance realizes the text in three-dimensional form , including all the nuances of direction, acting and design that support the writing , the task of the reader must therefore be a search for performance potential . This search relies on an understanding of theatre's immediacy as a performance language and its relationship to written text. Reading and analyzing text for performance is a creative process that can be honed and practiced.
          </p>

          <p>
            In the last twenty years , performance theory and performance studies have emerged as a field arguably derived from theatre studies. The role of the audience has also been studied as it is potentially useful , particularly with some of the work that requires an audience to become actively engaged with performance. As for dramaturgy , its practice originates in the work of the theorist and playwright Gotthold Lessing in the mid eighteenth century when he has the attempt to employ a working model for a new German national theatre in Hamburg.<sup>2</sup> Dramaturgy can be described by structure and composition of any play. As a term , dramaturgy describes an activity, that works on engaging composition with the dramatic work itself. In addition to structure , there are specific strategies should be applied to drama composition. The combination of structure and composition would of course affect theatre as a whole including audience. Shaping the dramaturgical work , the word 'dramaturgy' implies a connection with the real practice of the work structure. It is combined with an analytical process. Dramaturgy for Peter Reder , gives incidents and action temporal shape ; a process that presents a structure of activation for encoding and decoding meaning. He also stresses that dramaturgy is visualizing and embodying both structure and performance. Dramaturgy technically "emancipates and releases itself from an idea to paper through placing the idea into time and space , then giving it a body".<sup>3</sup> Considering the information designation which is "not just temporal but also physical" , Tim Etchells emphasizes the inner dynamics along with the ontological tension inside elements which give complexity to performance. As it is suggested by Reder , dramaturgical work is "an art –form , not a science , far from being formulaic".<sup>4</sup>
          </p>

          <p>
            To clarify the need for a dynamic and fluid conception of what composition means in the context of performance is more important than attempting to fix the meaning of a work only. Dramaturgy thus "tends to imply an observation of the play in production , the entire context of the performance event, the structuring of the artwork in all its elements : words , images , sound and so on."<sup>5</sup> The process also requires the awareness of the fact "that theatre is live and therefore always in process ; it is always open to disruption through both performance and rehearsal."<sup>6</sup> The tension between the fixity of concept and the fluidity of performance is illuminated by the reference to the ways in which the word dramaturgy has been used in other contexts.
          </p>

          <p>
            Erving Goffman , for instance , uses the word to analyze people's social roles which result communicative behaviours in society where they can influentially interact with the world around and the audience too. The process joins the encounters with others which is considered to be scripts including words , gestures , and actions. It seems that scripts tackle the individual and social communications depending on structural patterns making the social order recognizable and referenced. These elements are socially and individually experienced as unique contextual events.<sup>7</sup>
          </p>

          <p>
            Dramaturgy needs not only apply to dialogue and interpersonal relationship , but it can also apply to relationships with the world of the more-human world and objects. Architects relate dramaturgy to a building system where it is possible to apply the intended uses that are completed by events. For Bernard Tschumi , who is an architect , architecture can be "seen as the combination of spaces , events and movements … our experience becomes the experience of events organized and strategized through architecture."<sup>8</sup> So , Tschumi's definition suggests a dynamic relation exists between the conceptual ideal space and lived space. He describes art of architecture as a practice that is dramaturgical by its own where one sets structure for provoking and enabling live happenings. Nick Kaye comments , "Tschumi provides for an architecture, or set of architectural relations always in performance."<sup>9</sup> Hence , both Tschumi and theatre dramaturge have the same idea of performance architecture and architecture performance. To analyze Performance and dramaturgy requires an interchangeable process by which the first one implies an idea of unraveling the various strands of a product , while the second is very related to composition. Dramaturgy can be put as "someone who keeps the whole in mind".<sup>10</sup>
          </p>

          <p>
            Dramaturgy has changed as theatre and performance have changed through history. The history of theatre and drama has witnessed the definition of theatre by the play and dramaturgy has been defined according to play structure. Indeed play texts are often the most complete records of performances. However , one should remain aware of the limitations of the discussions of literary texts , words cannot be relied on for describing and predicting the dramaturgy of a theatre event. As Patrice Pavis assures , "the Performance must be considered as an independent occurrence, which cannot be explained as a realization of authorial or directorial intention. The dramaturgy of the play text is therefore something rather different from the dramaturgy of the play in performance which is always situated in space and time."<sup>11</sup> Dramaturgies change with the world change , accordingly , the differences between the world that people inhabit and that of the performance.
          </p>

          <div className="subsection">
            <h3 className="subsection-title">Political Theatre and Dramaturgy</h3>
            <p>
              Before delving into the political theatre , one must consider the term 'politics' . Politics can be recognized as "the important inescapable , and difficult attempt to determine relations of power in a given space".<sup>12</sup> Related to performance , politics is not static , but a dynamic social process which means that "power or powerlessness is nothing in itself and only ever meaningful in terms of the distribution of power across social relations , among different groups or classes or interests that make up , however momentarily , a social body".<sup>13</sup> Politics depends on the types of the power relations it supports. In terms of distribution of power , politics can be seen as authoritarian or democratic. While in the term of the economic system , it can be recognized as socialist , capitalist , communist , and feudalist. Once politics prioritizes the rights of the individuals , it can be seen as liberal and collective as it defines the rights of the group. It can also be thought as reactionary or progressive depending on whether it seeks to challenge or uphold the values of the existing social order.
            </p>

            <p>
              As far as theatre of politics is concerned , a political play is a play which tackles political issues. It "presents or constructs a political issue or comments on what is already perceived as political issue".<sup>14</sup> It manifests not only a simple content to discuss any political matter , but also a question the intention of which is political . A political play is used to "reshape the world along particular lines of development".<sup>15</sup> The dramaturgs' job is initially to tune in and familiarize themselves with the director's ideas. Dramaturgy in political drama usually designs the shape of tragedy plays which discuss political regimes and powers , such as , Shakespeare's dramas : Julius Caesar , Hamlet , and Cleopatra.
            </p>

            <p>
              The dramaturgical structures of serious drama also comes to be associated with the political play and the ideas that are related to the political characters themselves. The political character can be investigated through serious drama for it is the drama which people consider to be serious.
            </p>

            <p>
              Post-war British political plays are divided into two modes : the reflectionist mode which "asserts that the main function of art and indeed theatre is to hold up a mirror to nature and to reflect reality as accurately as possible"<sup>16</sup>. The second mode is the interventionist which "asserts that , even if it were possible to reflect reality accurately , the task is futile , since it is the task of the artist and playwright to interpret reality and to challenge our perception of it".<sup>17</sup> It has been seen that the interventionists are influenced by Brecht and the reflectionists are influentially interested in Ibsen's drama. As serious drama is not a specific form of drama , it validates particular forms of drama , such as , Ibsen's and Brecht's drama. This drama deals with the two modes on realistic basics.
            </p>

            <p>
              The London Merchant , as an example , shows the serious presentation of material that is exclusively mercantile and bourgeois. The title of the play introduces the audience to a disastrous deviation from an ideal which seems to be "commercial cleanliness [that] is next to godliness".<sup>18</sup> The political implications of the play , though it is set in the Elizabethan era, reflect England current hostilities against Spain. The play also criticizes Walpole's foreign policies. This criticism is intended by Lillo to affirm and gratify the belief in the importance of trade. The merchant's conversation with his daughter touches the increasing identity of interest and advantage .Maria lacks the desired ambition to rise socially by getting married to one of the noble lords. As a tragedy The London Merchant is justified in the way that "the more extensively useful the moral of any tragedy is , the more excellent that piece must be of its kind."<sup>19</sup> It is assumed that the play is a success for its avowed purpose which is headed "to the circumstances of the generality of mankind."<sup>20</sup> The middle class of society give their approval to this play since it discusses their life issues. The play turns the focus from nobles and kings to the tribulations of a humble apprentice. The dramaturgy of the play sets a plot tells the story of George Barnwell , an apprentice , who is seduced by a London prostitute , Sarah Millwood. She makes Barnwell give her an access to the wealthy and successful merchant Throrowgood's money , Barnwell's boss. The apprentice steals the money for his mistress , but , later on Barnwell blames himself for this betrayal . Thus , he breaks up with her , however , she again manages to restore the relationship with her victim. He believes her lies and helps her by stealing money again. She controls him and involves him in the his uncle's murder. Finally , Barnwell is sentenced to death and Millwood blames society for becoming an evil , yet she shows no regret for what she has done. Morality in the theatre is an important issue and the moral behavior is required by the tragic and serious characters.
            </p>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">Brecht's Political Theory in the Dramaturgy of Die Mutter</h3>
            <p>
              Bertolt Brecht defines political theatre by both form and content emphasizing the new structures in theatre which need to deal with reality of modern socio-economic systems. The transformation in Brecht's theatre strengthens the relation of spectators to the action on stage so that change can identify the way and material of their thinking . Cultivating the audience critical attitude is based on Brecht's theatre destruction of the illusory fourth wall which isolates them from the performance of the play. Epic theatre requires its dramaturgy , its performance , and its actors to preserve the political awareness in addition to the critical quality of this theatre. Characters should be presented on stage to make the audience think and rethink instead of overwhelming themselves in their parts.
            </p>

            <p>
              In his play Die Mutter : The Mother , which is written in 1931 in collaboration with Elisabeth Hauptmann and other writers , Brecht shows his scheme through the transmutation of Pelagea Wlassowa who is an apolitical Russian widow , into a revolutionary character with effective and dynamic functions. In the first scene, this widow has her own depression for Pawel's , her son , salary has been stopped where she stands helpless to find solution for the crisis . In Scene Two , Pawel and his fellows prepare strike leaflets against the political systems. The mother feels doubt and suspense about this political action , therefore, she reacts with hostility towards her son's colleagues. However , Pelagea decides to take care of this burden for ensuring her son's protection . In scene Three , Wlassowa skillfully escapes the leaflets into the factory watching the arrest of police which instigates her curiosity. Scene Four presents her as she is debating the revolutionaries , she defeats her suspicion when she understands their real goal. The mother accedes the strikers' May Day demonstration in scene Five. When Smilgin , one of the revolutionary workers, wears the flag , the police kills him. Pelagea's political activity is contradicted by her political outlook which is thus settled in the revolutionary commitment of the strike. Wlassowa consequently becomes an independent revolutionary participant in the strike , in the meantime , her son is in prison. In the sixth scene , she lives with the bourgeois teacher Nikolai Wessowtschikow , the bourgeois teacher and Pawel's friend Iwan's brother when she has been expelled from her house. She socializes her new neighbors and convinces them to adopt Communism . She and Nikolai volunteer to teach them writing and reading skills so that they can later on write their own leaflets. The mother's new political activity continues and she visits her son in the prison asking him about the peasants of the countryside who can support and the strike in their area. In scene eight , she herself delivers the propaganda to them and persuades the butcher to join the strike. In the last scenes , the mother witnesses the last joyful encounter with her son and she goes on fulfilling the strike till she is informed of her son's death. Regardless her sorrow , Wlassowa goes on practicing the political struggle against rent prices and superstitions. Wlassowa's struggle also includes the First World War. Finally , she battles her illness , in the meantime , she is rewarded by leading one of the demonstrations in the Revolution of 1917.
            </p>

            <p>
              The selective adaptation of Brecht inthe play dramaturgy shows the pre-revolutionary Russia's real situation and the Weimar Republic concentrating on serious topical issues , such as , wage cuts , strikes , and police brutality. The play addresses significant political issues and summons revolution as the only available solution for problems of Germany's socio-economic system. The setting serves the indirect political criticism of Germany. Brecht transforms the Russian revolutionary experience as a warning for the possibility of having revolution against the German political regime.
            </p>

            <p>
              Traditionally ,The dramaturg chooses the plays for a theatre's production , giving adaptation and reshaping these plays ; sometimes to advise the actors and the director about the historical considerations as well . All of these things are done by Brecht instantly. He magnifies the role of the dramaturg in the collective of the theatrical company. It has been confirmed that Brecht is a playwright , dramaturg , and director:
            </p>

            <blockquote className="quote">
              Brecht eliminated the succession of tasks that had developed .Through occupational specialization in bourgeois theatre. First , through his own person. He was a playwright , dramaturg , and director. Sometimes also a composer and stage designer. The stage designers , composers , and the dramaturgs worked together from the outset on the scenic realization of the story.<sup>21</sup>
            </blockquote>

            <p>
              As a dramaturg , Brecht's experience has three phases : in 1923 , Brecht plays a more-or-less conventional role in Munich , then he joins Piscator's collective dramaturgical structure in Berlin in 1927 , then finally he himself sponsors a group of dramaturgy training in East Germany from 1949 to the end of his life. He is , on the other hand , democratic , adaptable , famous , dominant , and politically favored leader whose productions have been shaped as far as his own inclinations and theory are concerned. Interplay with the action in its dramatic setting shows the effect of the play. The stylized opening monologue by Wlassowa tells strong epic elements , for example , it has a replacement for the exposition of traditional dramatic forms through using dialogue , and it also directly introduces the name , age , social position , and plight of the heroin . A strong dramatic dimension can be attainable as well : the character's narration includes her own plight by the first person speaker , within the dramatic setting of her home . As for the audience , she deals with them as being her collective. The monologue , for Brecht , should suite the dramatic action of the dramaturgy that he follows in the play.
            </p>

            <p>
              Brecht's textual changes in Die Mutter shift the political focus from Nizhni-Novogord in 1902 to Berlin in 1932 , so that the play engages closely with the German Left revolutionary discourse . The play's opening scene has been introduced and dominated by the link between wage cuts and the subsistence crisis: "The Mother: … I cannot put any more fat in it , not half a spoonful. For only last week one kopeck per hour was cut from his wages, and nothing I do can make up for it….Mascha argues that only revolution can solve domestic hardship: Mascha : You must overturn the whole state. From top to bottom Until you have your soup." (The Mother , pp. 263-267).
            </p>

            <p>
              One finds that hunger is caused by politics which is something observed even by the police inspector as he calls "the almost empty dripping-pot political". (The Mother , p. 268).The subject is treated by Brecht skillfully in order to be "corresponded closely to the coverage in the KPD newspaper Die Rote Fahne (The Red Flag) , which reported regularly on falling wages and rising prices , emphasizing their impact on domestic life in articles aimed at women , whom the KPD was particularly keen to recruit."<sup>22</sup>
            </p>

            <p>
              Brecht has expanded argument of Gorky for industrial action in two key regards. In the eighth scene , he contains the peasants' strikes , which are more potential to attract the urban spectators than the description that is introduced by Gorky about the obstacles of winning the battle against peasants. Die Rote Fahne's reports, In 1930, tell facts about similar strikes have happened the countryside and about the troubles that farm workers may have faced. Brecht has also substituted , in Scene Three , Karpow , who is a reformist , for the factory director of Gorky in confronting revolutionaries. This enables Brecht to use , such another major concern of the KPD as the fight depiction against reformism ; which is a chief adversary for the reformist Social Democratic Party SPD. Paul Brand , a communist reviewer , recognizes that Karpow represents the regularly derogated SPD Trade Unionist Fritz Tarnow by KPD. Pawel states : "So capitalism is sick , and you are the doctor." (The Mother , p. 275). This speech has a reference to another speech at the SPD conference in June 1931 , where Tarnow claimed that the SPD stood at capitalism's sickbed: "We are condemned both to be the doctor , who has a serious desire to heal , and none the less to feel that we are heirs who would prefer to take possession of the entire legacy of the capitalist system today rather than tomorrow."<sup>23</sup> The KPD has been outraged by this statement because it renounces the view that the proletariat is the bourgeoisie's gravedigger and the adherence to revolution. Thus , Brecht's changes compact fully with the policy of Party. It is obvious that Brecht , later on and unlike the KPD, has viewed reformists differently. Brecht characterizes Karpow as being honorable and source of change instead of being opportunistic and irredeemably selfish. In the version that has been performed at the premiere , specifically, Scene Three ; Karpow's arrest comes for his refusal to betray Wlassowa and delivers her to the factory police (The Mother , p.277). He , therefore , decides to join the revolutionaries' demonstration , and then is killed by the police . It is a solution which portrays one of major enemies against the Communists as a revolutionary martyr.
            </p>
          </div>
        </div>
      </div>
    </>
  );

  const renderPeasantsPublication = () => (
    <>
      {/* Header */}
      <div className="publication-header">
        <div className="title-container">
          <div className="title-decoration"></div>
          <h1 className="publication-title arabic-title">


The Peasants And Craftmen's Conditions In Cao City In Sonphai 
         <span className="title-emphasis">
Iskai Era Up to The Tenth Century H./ Sixteenth Century A. D.      
         </span>
          </h1>
          <div className="title-decoration reverse"></div>
        </div>
        <div className="publication-divider"></div>
        
        {/* English Title */}
        <div className="english-title-container">
          <h2 className="english-title">
            <span className="english-subtitle"></span>
          </h2>
        </div>
      </div>

      {/* Author Info - Arabic */}
      <div className="author-info arabic-author-info">
        <div className="researchers-container">
          <div className="researcher arabic-researcher">
            <div className="researcher-avatar">
              <div className="avatar-icon">👨‍🏫</div>
            </div>
            <div className="researcher-content">
              <h3 className="researcher-title arabic-text">First researcher:</h3>
              <h2 className="author-name arabic-text">The first researcher: Assistant Professor Dr. Iman Obaid Wannas

</h2>
              <div className="researcher-contact">
                <span className="contact-icon">📧</span>
                <span className="researcher-email">iman.abaid@iku.edu.iq</span>
              </div>
              <p className="researcher-affiliation arabic-text">
University College of Imam Al-Kadhim peace be upon him for Islamic Sciences - Babylon Departments, Babylon -Iraq

              </p>
            </div>
          </div>
          
          <div className="researcher arabic-researcher">
            <div className="researcher-avatar">
              <div className="avatar-icon">👨‍🎓</div>
            </div>
            <div className="researcher-content">
              <h3 className="researcher-title arabic-text">First researcher:</h3>
              <h2 className="author-name arabic-text">The second researcher: Professor Dr. Zaman Obaid Wannas</h2>
              <div className="researcher-contact">
                <span className="contact-icon">📧</span>
                <span className="researcher-email">zaman.o@uokerbala.edu.iq</span>
              </div>
              <p className="researcher-affiliation arabic-text">
University of Kerbala / The College of Education for Human Science/Department of

History ,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kerbala - Iraq    
          </p>
            </div>
          </div>
        </div>
      </div>

     

      {/* Arabic Keywords Section */}
      {/* <div className="content-section keywords-section arabic-section">
        <div className="section-header">
          <div className="section-icon">🏷️</div>
          <h2 className="section-title arabic-text">الكلمات المفتاحية</h2>
          <div className="section-divider"></div>
        </div>
        <div className="keywords-list arabic-keywords">
          <span className="keyword arabic-keyword">
            <span className="keyword-icon">🌍</span>
            بلاد السودان الغربي
          </span>
          <span className="keyword arabic-keyword">
            <span className="keyword-icon">🏙️</span>
            كاو
          </span>
          <span className="keyword arabic-keyword">
            <span className="keyword-icon">👨‍🌾</span>
            الفلاحين
          </span>
          <span className="keyword arabic-keyword">
            <span className="keyword-icon">🛠️</span>
            مهن وحرف
          </span>
          <span className="keyword arabic-keyword">
            <span className="keyword-icon">👑</span>
            سونغاي
          </span>
        </div>
      </div> */}



 {/* English Keywords Section */}
      <div className="content-section keywords-section">
        <div className="section-header">
          <div className="section-icon">🏷️</div>
          <h2 className="section-title">Keywords</h2>
          <div className="section-divider"></div>
        </div>
        <div className="keywords-list">
          <span className="keyword">
            <span className="keyword-icon">🌍</span>
            Objectives
          </span>
          <span className="keyword">
            <span className="keyword-icon">🏙️</span>
            Methodology
          </span>
          <span className="keyword">
            <span className="keyword-icon">👨‍🌾</span>
            Results
          </span>
          <span className="keyword">
            <span className="keyword-icon">🛠️</span>
            Conclusion
          </span>
          <span className="keyword">
            <span className="keyword-icon">👑</span>
            Songhai
          </span>
        </div>
      </div>





      {/* English Abstract Section */}
      <div className="content-section summary-section">
        <div className="section-header">
          <div className="section-icon">📊</div>
          <h2 className="section-title">Summary</h2>
          <div className="section-divider"></div>
        </div>
        <div className="content-text">
          <div className="summary-grid">
            <div className="summary-item">
              <div className="summary-icon">🎯</div>
              <div className="summary-content">
                <strong>Objectives:</strong>
                <p>
                  The research presented a study that discussed the conditions of farmers and masters of professions and crafts in the countries of West Africa as the majority of the general class, for the residents of the city of Kao, the capital, during the Asaki Songhai era 869-999 AH / 1464-1590 AD, as those people formed the destitute class of working proletariat in an aristocratic and feudal society within the limits of the country's cultural and economic level at the time, These social characteristics characterized the absolute authorities of the Sing Emperor, In order to examine the hypothesis of this study, we extracted the texts and deduced them from their origins to confirm and explain the hypothesis.
                </p>
              </div>
            </div>
            
            <div className="summary-item">
              <div className="summary-icon">🔍</div>
              <div className="summary-content">
                <strong>Methodology:</strong>
                <p>
                  The research relied on the historical descriptive approach, as well as analysis according to the philosophy of historical materialism. On this basis, the research problem was observed and then analyzed, relying on the source of Islamic heritage books.
                </p>
              </div>
            </div>
            
            <div className="summary-item">
              <div className="summary-icon">📈</div>
              <div className="summary-content">
                <strong>Results:</strong>
                <p>
                  The research concluded that the economic style prevailing and imposed by the state, represented by the emperor first and then by a group of princes, ministers, and influential people, was what shaped the society of West Africa at that time, and it was what placed the peasant and craftsmen class in a miserable economic situation until they became at the bottom of the social ladder.
                </p>
              </div>
            </div>
            
            <div className="summary-item">
              <div className="summary-icon">🏁</div>
              <div className="summary-content">
                <strong>Conclusion:</strong>
                <p>
                  The study concludes with the necessity of studying the sociology of societies in order to understand the process of historical events, whether political, economic, social or intellectual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      {/* Introduction Section */}
      <div className="content-section introduction-section">
        <div className="section-header">
          <div className="section-icon">📖</div>
          <h2 className="section-title">Introduction</h2>
          <div className="section-divider"></div>
        </div>
        <div className="content-text">
          <p>
            Kao is an ancient African-Sudanese city, according to medieval Arabic texts, located in the western part of the African continent, south of the Sahara. It is characterized by large areas of savannah plains, in which the climatic conditions of the land vary according to distance or proximity to the surrounding regions. In the north, the Sahara Desert and the savannah plains, and the rainforests in the south of the West African region, in addition to the influence of the Niger River, which borders it <sup>1</sup>.
          </p>
          <p>
            The territory of Western Sudan, according to the designation of the Arabs geographer of the Middle Ages, extends between latitude 5 degrees north to 25 degrees north, and longitude 17 degrees west to 15 degrees east <sup>2</sup>, and the location of the city specifically on the eastern meandering of the Niger River. <sup>3</sup> As we mentioned above - where it begins its meandering and march towards the south in the direction of Kukiya <sup>4</sup>, and in its northwest lies the most famous city of the Sudan Land historically, the city of Timbuktu, which is regarded as the largest commercial port in The Sahara of Africa. Al-Qalqashandi said <sup>5</sup>: (Koko is east of the river) and Koko is one of the names given by the Arabs to Kao, as it will be explained later . Ibn Saad <sup>6</sup> said: (The city of Koko is to the east of the river attributed to it, where the length is 24 degrees and the width is 10 degrees and 15 minutes, and its north is the outskirts of The southern part of the Sahara Desert. Fodi <sup>7</sup> said: ((what borders this country from the north is wastelands and dry sands, not inhabited except some shepherds in summer. In the south of Kao is a fertile land that is suitable for agriculture due to the influence of the Niger River and its flood in summer, which lasts for three months <sup>8</sup>, in addition to the seasonal rains. The well-known traveler Ibn Battuta - who visited the region and entered the city in the eighth century AH, fourteenth century AD, and witnessed its development - described it as "one of the best, largest and most fertile cities in the Sudan lands."<sup>9</sup>
          </p>
          <p>The Economic and Social Structure of the City of Kao (Kaw) in Western Sudan

The designation of the West African region as the lands of Western Sudan originated from Arab geographers of the Middle Ages who described all territories south of the Sahara as Bilād al-Sūdān—the “Land of the Blacks.” They divided these territories into three regions: Near, Central, and Western Sudan. The city of Kao (or Kaw) belonged to the western part of this classification.

The exact origin of the name “Kao” remains uncertain, as neither Arabic nor local sources—nor even the accounts of travelers and geographers—provided a definitive explanation. The city has appeared in various historical sources under several spellings, including Kag, Kago, Koko, Ka’at, and Kukiya. The local historian Ka’at stated that there were two pronunciations of the name—Kag and Koko. The name Kag (or Koga) became widely known among Moroccan merchants due to the political and commercial prominence of the city as the capital of the Songhai Empire. Al-Yaqoubi referred to it as Koko and described it as “the greatest and most noble of the kingdoms of the Sudan, and Koko is the name of the city.”

Urban Society and Social Classes

Because of its urban and political significance, Kao was inhabited by diverse human groups that collectively formed a complex urban society divided into several social classes.
At the top was the feudal aristocracy, composed of rulers and nobles, followed by large landowners and military elites. Below them were major merchants, who not only traded across regions but also owned large agricultural estates. These upper classes were both bourgeois and feudal in nature. Beneath them were small merchants, artisans, and middle landowners, forming the middle class, followed by the working poor—small peasants, laborers, and craftsmen. At the bottom were the slaves and serfs, who were not considered part of the formal social hierarchy but rather as property and labor instruments serving their masters.

Each of these groups engaged in different economic activities according to their position in the social order. Those who mastered skilled crafts—such as goldsmithing—were regarded as wealthy members of the city, while others engaged in various trades that collectively shaped Kao’s economic life. Despite its political and commercial role, agriculture remained the dominant economic activity, due to the fertility of the land and the abundance of its produce.

Land Ownership and Feudalism

The pattern of land ownership and labor relations in Kao mirrored that of contemporary Arab and Islamic cities. Feudalism was the prevailing economic system, similar to that seen in the broader Islamic world during the Middle Ages. Historical evidence indicates that various forms of feudalism and serfdom characterized medieval societies globally, including Persia, Byzantium, Iraq, and the Levant.

In Kao, landlords granted estates (iqṭāʿs) to princes or nobles in exchange for protection, while the original landholders became serfs. This system defined the social and economic hierarchy, determining the privileges and hardships of agricultural and industrial workers.

Agricultural System and Labor Conditions

The fertility of Kao’s soil encouraged agricultural expansion, which the sultans actively supported. As the primary landowners, they sought to enhance production by bringing in skilled farmers and agricultural engineers from Morocco. These experts introduced new cultivation techniques, irrigation methods, and improved grains. Such improvements, however, benefited mainly the royal and aristocratic estates—those of the sultans, princes, ministers, and wealthy landlords.

Large estates were cultivated by serfs and wage laborers, while medium and small estates were worked by their owners and families. The productivity of these lands depended largely on the wealth and power of their owners. The laboring classes, however, endured harsh conditions. Wage laborers were employed for tasks such as plowing, sowing, pruning, and harvesting. They worked alongside serfs and often lived in poverty despite abundant agricultural output.

Contemporary accounts describe their housing as modest huts of straw and wood located on the city’s outskirts. Al-Wazzan wrote: “These people live in ignorance; you can hardly find a person within a hundred miles who can read or write.” The serfs’ condition was even worse—they were mere tools of production, receiving only the minimum sustenance necessary to work. They formed the base of the agricultural system but held no recognized social status except for a few appointed overseers who managed labor on behalf of the sultan.

Peasants and Small Landowners

Medium and small landowners also faced difficulties, largely due to heavy taxation. Although their conditions varied depending on the size of their land, most farmers worked collectively with their families. Their living standards were slightly better than wage laborers, but still modest. Together, these groups formed the proletariat of Kao’s society—the class of toiling peasants, laborers, and small producers.

Crafts, Trades, and Industry

The craftspeople of Kao were similar in condition to its farmers. The cities of Western Sudan in general were characterized by simple and traditional craftsmanship. Luxury goods such as perfumes and fine textiles were imported from North Africa and the Arab world. Local artisans worked in small workshops scattered throughout the markets, producing basic items to meet the daily needs of residents.

Despite their simplicity, Kao’s industries were diverse due to the availability of raw materials from surrounding Songhai regions. These included textile production, weaving of wool and cotton, sewing and dyeing, bead making, leather tanning, and food processing. However, craftsmen endured heavy taxes and low profits, barely earning enough to survive.

Some professions, however, enjoyed higher prestige and prosperity. Blacksmiths and goldsmiths, working with valuable metals, were considered among the city’s elite artisans. They, along with wealthy merchants, formed the bourgeois middle class—the most affluent segment of Kao’s urban population.

Conclusion

In conclusion, the economic and social structure of Kao reflected a deeply feudal and hierarchical society. Wealth and privilege were concentrated among the ruling and aristocratic classes, while the majority—farmers, artisans, and laborers—lived under harsh conditions and heavy taxation. Equality in wealth distribution was absent; disparities in opportunity and living standards prevailed. Feudalism defined the economic and social order of Western Sudan, and Kao was no exception.</p>
        </div>
      </div>
    </>
  );

  return (
    <section id="publication2" ref={container}>
      <div className="background-animation">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
      
      <div className="container">
        {/* Back Button */}
        <div className="back-button-container">
          <Link to="/" className="back-btn">
            <span className="btn-icon">←</span>
            <span className="btn-text">Back to Publications</span>
          </Link>
        </div>

        {/* Publication Switcher Buttons */}
        <div className="publication-switcher">
          <div className="switcher-background"></div>
          <button 
            className={`switch-btn ${activePublication === 'brecht' ? 'active' : ''}`}
            onClick={() => setActivePublication('brecht')}
          >
            <span className="btn-icon">🎭</span>
            <span className="btn-text">Brecht's Political Theory</span>
            <span className="btn-glow"></span>
          </button>
          <button 
            className={`switch-btn ${activePublication === 'peasants' ? 'active' : ''}`}
            onClick={() => setActivePublication('peasants')}
          >
            <span className="btn-icon">👨‍🌾</span>
            <span className="btn-text">Peasants & Craftmen</span>
            <span className="btn-glow"></span>
          </button>
        </div>

        {/* Conditional Rendering based on active publication */}
        <div className="publication-content">
          {activePublication === 'brecht' ? renderBrechtPublication() : renderPeasantsPublication()}
        </div>
      </div>
    </section>
  );
};

export default Publication2;





