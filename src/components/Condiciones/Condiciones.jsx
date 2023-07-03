//muestra el formulario para registrarse como usuario, pendiente cambiar el nombre del componente por algo 
//que esté más claro.

import React from "react";
import { Text, Heading } from '@chakra-ui/react'


const Condiciones = () => {
    return (
        <div >


            <Heading as="h2" fontSize="xl" sx={{ color: 'green', marginTop: '40px', fontWeight: 'bold' }}>
                Términos y Condiciones
            </Heading>

            <Text fontSize="md" mt={4} sx={{ textAlign: 'justify', marginLeft: '40px', marginRight: '20px' }}>
                Bienvenido a Spanish with Alex. Estos términos y condiciones rigen tu uso de nuestra plataforma y los servicios que ofrecemos. Al utilizar nuestra plataforma, aceptas cumplir con estos términos y condiciones en su totalidad. Si no estás de acuerdo con alguno de los términos, no utilices nuestros servicios.
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

                1914 translation by H. Rackham
                "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

                Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

                1914 translation by H. Rackham
                "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
            </Text>

            <Heading as="h3" fontSize="md" mt={4} sx={{ fontWeight: 'bold', marginLeft: '40px', marginRight: '20px' }}>
                Uso de la plataforma
            </Heading>

            <Text fontSize="md" mt={2} sx={{ textAlign: 'justify', marginLeft: '40px', marginRight: '20px' }}>
                Spanish with Alex te otorga un permiso limitado, no exclusivo y no transferible para acceder y utilizar nuestra plataforma con fines educativos. No podrás utilizar nuestros materiales con fines comerciales sin nuestro consentimiento previo por escrito.
            </Text>

            <Heading as="h3" fontSize="md" mt={4} sx={{ fontWeight: 'bold', marginLeft: '40px', marginRight: '20px' }}>
                Responsabilidad del usuario
            </Heading>

            <Text fontSize="md" mt={2} sx={{ textAlign: 'justify', marginLeft: '40px', marginRight: '20px' }}>
                Eres responsable de mantener la confidencialidad de tu cuenta y contraseña, y de restringir el acceso a tu dispositivo. Aceptas ser el único responsable de todas las actividades que ocurran bajo tu cuenta. Si sospechas que alguien más está utilizando tu cuenta, debes informarnos de inmediato.
            </Text>

            <Heading as="h3" fontSize="md" mt={4} sx={{ fontWeight: 'bold', marginLeft: '40px', marginRight: '20px' }}>
                Derechos de propiedad intelectual
            </Heading>

            <Text fontSize="md" mt={2} sx={{ textAlign: 'justify', marginLeft: '40px', marginRight: '20px' }}>
                Todos los materiales y contenido en nuestra plataforma, incluyendo pero no limitado a textos, imágenes, videos y logotipos, están protegidos por derechos de propiedad intelectual. No puedes utilizar, copiar, reproducir, modificar, distribuir o crear trabajos derivados sin nuestro permiso previo por escrito.
            </Text>

        </div >

    )
}

export default Condiciones


