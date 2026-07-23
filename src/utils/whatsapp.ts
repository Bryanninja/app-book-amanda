/**
 * Utilitário para gerar links do WhatsApp
 * Segue o princípio da responsabilidade única (SOLID - SRP)
 */

export function getWhatsAppLink(phone: string, message: string): string {
  // Remove todos os caracteres que não sejam números (ex: espaços, +, -)
  const cleanPhone = phone.replace(/\D/g, '');
  
  // Codifica a mensagem para o formato de URL (ex: espaços viram %20)
  const encodedMessage = encodeURIComponent(message);
  
  // Retorna o link pronto para a API do WhatsApp
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}
