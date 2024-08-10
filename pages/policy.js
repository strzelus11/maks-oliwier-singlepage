import SectionLayout from "@/components/SectionLayout";

export default function PolicyPage() {
	return (
		<SectionLayout title="Polityka prywatności">
			<div className="text-gray-400 text-lg space-y-4 p-5 bg-secondary rounded-xl">
				Dane, są zbierane wtedy i tylko wtedy, gdy użytkownik się z nami
				kontaktuje, czy to aby zadać pytanie, czy przez zapisywanie się na
				korepetycje
				<ol className="list-decimal ml-6 space-y-3">
					<li>
						Jakie dane zbieramy:
						<ul className="list-disc ml-6 mt-2 space-y-2">
							<li>Imiona i nazwiska</li>
							<li>Adresy email</li>
						</ul>
					</li>
					<li>
						Dlaczego zbieramy dane:
						<ul className="list-disc ml-6 mt-2 space-y-2">
							<li>Adresy email niezbędne są do komunikacji z klientem</li>
							<li>
								Wiedza o imionach i nazwiskach usprawnia konwersacje mailową z
								klientem, ale także komunikację podczas zajęć online
							</li>
						</ul>
					</li>
					<li>
						Dane są przechowywane w naszym systemie aby prowadzić zapisy osób na
						poszczególne zajęcia
					</li>
					<li>
						Nie udostępniamy danych innym firmom ani osobom. Są widoczne tylko
						dla nas i przekazywane są pomiędzy pracownikami naszej działalności
					</li>
				</ol>
			</div>
		</SectionLayout>
	);
}
