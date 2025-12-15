export function Footer() {
  return `
    <footer class="mt-16 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div class="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 class="text-xl font-extrabold text-gray-900 dark:text-white">
              Super Carnes García
            </h3>
            <p class="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
              Calidad, frescura y atención todos los días.
            </p>
          </div>

          <div>
            <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-3">📍 Ubicación</h4>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              Zaragoza 201<br>
              88440 Ciudad Camargo, Tamaulipas<br>
              México
            </p>
          </div>

          <div>
            <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-3">🕒 Horario</h4>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              7:00 a 22:00 horas<br>
              Todos los días
            </p>

            <a href="#" data-page="contact"
              class="nav-link inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-3 rounded-xl font-bold shadow hover:shadow-lg transition-all active:scale-95">
              Contacto
            </a>
          </div>
        </div>

        <div class="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-sm text-gray-500 dark:text-gray-500">
            © 2025-2026 Super Carnes García. Todos los derechos reservados.
          </p>
          <div class="flex items-center gap-4 text-sm">
            <a href="#" data-page="meats" class="nav-link text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Cortes</a>
            <a href="#" data-page="products" class="nav-link text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Productos</a>
            <a href="#" data-page="offers" class="nav-link text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Ofertas</a>
          </div>
        </div>
      </div>
    </footer>
  `
}
