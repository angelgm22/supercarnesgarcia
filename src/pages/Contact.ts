export function renderContact() {
  return `
    <section class="mb-12">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 text-center">
          Contáctanos
        </h1>
        <p class="text-gray-600 dark:text-gray-300 text-center mb-10">
          Envíanos un mensaje y con gusto te respondemos.
        </p>

        <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
          <form id="contactForm" class="space-y-5">
            <div>
              <label class="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-2">Nombre</label>
              <input name="name" required
                class="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Tu nombre" />
            </div>

            <div>
              <label class="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-2">Correo</label>
              <input name="email" type="email" required
                class="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="tu@email.com" />
            </div>

            <div>
              <label class="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-2">Mensaje</label>
              <textarea name="message" rows="5" required
                class="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="¿En qué te ayudamos?"></textarea>
            </div>

            <!-- Correo destino (placeholder) -->
            <p class="text-xs text-gray-500 dark:text-gray-400">
              * El mensaje se enviará a: <span class="font-semibold">[correo por definir]</span>
            </p>

            <button type="submit"
              class="w-full inline-flex justify-center items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-xl font-bold shadow-lg transition-all active:scale-95">
              Enviar mensaje
            </button>

            <p id="contactStatus" class="text-sm text-center"></p>
          </form>
        </div>

        <div class="mt-8 text-center text-gray-600 dark:text-gray-300">
          <p class="font-bold">📍 Zaragoza 201, 88440 Ciudad Camargo, Tamaulipas, México</p>
          <p class="mt-1">🕒 7:00 a 22:00 horas (Todos los días)</p>
        </div>
      </div>
    </section>
  `
}
